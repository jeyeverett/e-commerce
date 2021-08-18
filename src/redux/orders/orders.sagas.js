import { takeLatest, put, all, call } from 'redux-saga/effects';
import admin from 'firebase';
import { getCurrentUser, firestore } from '../../firebase/firebase.utils';

import OrderActionTypes from './orders.types';
import {
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
} from './orders.actions';

export function* createOrder({ payload: { cartItems } }) {
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

    const orderRef = firestore.collection('orders').doc(user.uid);
    const orderDoc = orderRef.get();

    if (!orderDoc.exists) {
      yield firestore
        .collection('orders')
        .doc(user.uid)
        .set({
          orders: [{ orderItems, orderDate: new Date(), orderTotal }],
          userId: user.uid,
        });
    } else {
      yield firestore
        .collection('orders')
        .doc(user.uid)
        .update({
          orders: admin.firestore.FieldValue.arrayUnion({
            orderItems,
            orderDate: new Date(),
            orderTotal,
          }),
        });
    }

    yield put(createOrderSuccess());
  } catch (error) {
    yield put(createOrderFailure(error.message));
  }
}

export function* onCreateOrderStart() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder);
}

export function* orderSagas() {
  yield all([call(onCreateOrderStart)]);
}
