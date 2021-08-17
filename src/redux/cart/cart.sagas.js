import { takeLatest, all, call, put } from 'redux-saga/effects';

import { CartActionTypes } from './cart.types';
import UserActionTypes from '../user/user.types';

import { getCurrentUser, firestore } from '../../firebase/firebase.utils';

import {
  clearCart,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartFailure,
  syncCartSuccess,
  syncCartFailure,
} from './cart.actions';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCheckout,
} from './cart.utils';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* fetchCartOnSignIn() {
  yield put(fetchCartStart());
}

export function* syncCartToFirestore(action) {
  try {
    const user = yield getCurrentUser();
    if (!user) return;

    const currentUserRef = firestore.collection('users').doc(user.uid);
    const currentUser = yield currentUserRef.get();
    let userData, updatedCart;

    if (currentUser.exists) userData = yield currentUser.data();

    if (!userData.cartId) {
      const newDocRef = firestore.collection('carts').doc();
      const newCartItem = { ...action.payload, quantity: 1 };
      yield firestore
        .collection('carts')
        .doc(newDocRef.id)
        .set({ cartItems: [newCartItem], userId: user.uid });
      yield firestore
        .collection('users')
        .doc(user.uid)
        .set({ cartId: newDocRef.id }, { merge: true });
      return yield put(syncCartSuccess([newCartItem]));
    } else {
      const userCart = yield firestore
        .collection('carts')
        .doc(userData.cartId)
        .get();
      const { cartItems } = userCart.data();
      switch (action.type) {
        case CartActionTypes.ADD_ITEM:
          updatedCart = addItemToCart(cartItems, action.payload);
          break;
        case CartActionTypes.REMOVE_ITEM:
          updatedCart = removeItemFromCart(cartItems, action.payload);
          break;
        case CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT:
          updatedCart = clearItemFromCheckout(cartItems, action.payload);
          break;
        default:
          break;
      }
    }
    yield firestore
      .collection('carts')
      .doc(userData.cartId)
      .set({ cartItems: updatedCart }, { merge: true });
    yield put(syncCartSuccess(updatedCart));
  } catch (error) {
    yield put(syncCartFailure(error.message));
  }
}

export function* fetchCartAsync() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;

    const currentUserRef = firestore.collection('users').doc(user.uid);
    const currentUser = yield currentUserRef.get();
    const userData = yield currentUser.data();

    if (!userData.cartId) return;

    const userCart = yield firestore
      .collection('carts')
      .doc(userData.cartId)
      .get();
    const { cartItems } = userCart.data();

    yield put(fetchCartSuccess(cartItems));
  } catch (error) {
    yield put(fetchCartFailure(error.message));
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCartOnSignIn);
}

export function* onFetchCartStart() {
  yield takeLatest(CartActionTypes.FETCH_CART_START, fetchCartAsync);
}

export function* onAddItem() {
  yield takeLatest(CartActionTypes.ADD_ITEM, syncCartToFirestore);
}

export function* onRemoveItem() {
  yield takeLatest(CartActionTypes.REMOVE_ITEM, syncCartToFirestore);
}

export function* onClearItem() {
  yield takeLatest(
    CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT,
    syncCartToFirestore
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onAddItem),
    call(onRemoveItem),
    call(onClearItem),
    call(onFetchCartStart),
    call(onSignInSuccess),
  ]);
}
