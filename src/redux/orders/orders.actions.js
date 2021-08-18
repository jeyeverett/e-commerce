import OrderActionTypes from './orders.types';

export const createOrderStart = (cartItems) => ({
  type: OrderActionTypes.CREATE_ORDER_CREATE,
  payload: cartItems,
});

export const createOrderSuccess = () => ({
  type: OrderActionTypes.CREATE_ORDER_SUCCESS,
  error: null,
});

export const createOrderFailure = (error) => ({
  type: OrderActionTypes.CREATE_ORDER_FAILURE,
  payload: error,
});
