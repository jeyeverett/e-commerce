import { OrderActionTypes } from './orders.types';

export const createOrderStart = (orderData) => ({
  type: OrderActionTypes.CREATE_ORDER_START,
  payload: orderData,
});

export const createOrderSuccess = () => ({
  type: OrderActionTypes.CREATE_ORDER_SUCCESS,
  error: null,
});

export const createOrderFailure = (error) => ({
  type: OrderActionTypes.CREATE_ORDER_FAILURE,
  payload: error,
});

export const fetchOrdersStart = () => ({
  type: OrderActionTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = (orderItems) => ({
  type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
  payload: orderItems,
});

export const fetchOrdersFailure = (error) => ({
  type: OrderActionTypes.FETCH_ORDERS_FAILURE,
  payload: error,
});
