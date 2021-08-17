import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { selectCartItems } from './cart.selector';
import { CartActionTypes } from './cart.types';
import { UserActionTypes } from '../user/user.types';

import { getCurrentUser, firestore } from '../../firebase/firebase.utils';

import {
  clearCart,
  fetchCartSuccess,
  fetchCartFailure,
  syncCartSuccess,
  syncCartFailure,
} from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* syncCartToFirestore(action) {
  try {
    const user = yield getCurrentUser();
    if (!user) return;

    const cartDocRef = yield firestore.collection('carts').doc(user.uid).get();
    if (!cartDocRef.exists) {
      yield firestore
        .collection('carts')
        .doc(user.uid)
        .set({ cartItems: [{ ...action.payload, quantity: 1 }] });
    } else {
      const cartItems = yield select(selectCartItems);
      yield firestore.collection('carts').doc(user.uid).update({ cartItems });
    }
    yield put(syncCartSuccess());
  } catch (error) {
    yield put(syncCartFailure(error.message));
  }
}

export function* fetchCartAsync() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;

    const userCart = yield firestore.collection('carts').doc(user.uid).get();
    if (!userCart.exists) return;

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
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCartAsync);
}

export function* onCartUpdate() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT,
    ],
    syncCartToFirestore
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartUpdate),
  ]);
}
