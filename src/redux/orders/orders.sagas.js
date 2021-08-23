import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCurrentUser, firestore } from '../../firebase/firebase.utils';

import { UserActionTypes } from '../user/user.types';
import { OrderActionTypes } from './orders.types';
import {
  createOrderSuccess,
  createOrderFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from './orders.actions';

export function* createOrder(data) {
  const { cartItems, receiptUrl } = data.payload;
  try {
    const user = yield getCurrentUser();
    if (!user) return;

    const orderItems = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const orderTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const orderRef = yield firestore.collection('orders').doc(user.uid);
    const orderDoc = yield orderRef.get();

    if (!orderDoc.exists) {
      yield firestore
        .collection('orders')
        .doc(user.uid)
        .set({
          orders: [
            { orderItems, orderDate: new Date(), orderTotal, receiptUrl },
          ],
          userId: user.uid,
        });
    } else {
      const { orders: existingOrders } = yield orderDoc.data();

      yield firestore
        .collection('orders')
        .doc(user.uid)
        .set({
          orders: [
            ...existingOrders,
            {
              orderItems,
              orderDate: new Date(),
              orderTotal,
              receiptUrl,
            },
          ],
        });
    }

    yield put(createOrderSuccess());
  } catch (error) {
    yield put(createOrderFailure(error.message));
  }
}

export function* fetchOrdersAsync() {
  yield put(fetchOrdersStart());
  try {
    const user = yield getCurrentUser();
    if (!user) return;

    const userOrders = yield firestore.collection('orders').doc(user.uid).get();
    if (!userOrders.exists) return;

    const { orders } = userOrders.data();

    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchOrdersFailure(error.message));
  }
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchOrdersAsync);
}

export function* onCreateOrderStart() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder);
}

export function* onCreateOrderSuccess() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_SUCCESS, fetchOrdersAsync);
}

export function* orderSagas() {
  yield all([
    call(onCreateOrderStart),
    call(onSignInSuccess),
    call(onCreateOrderSuccess),
  ]);
}
