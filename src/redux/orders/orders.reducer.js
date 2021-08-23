import { OrderActionTypes } from './orders.types';

const INITIAL_STATE = {
  orders: null,
  error: null,
  isFetching: true,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
      };
    case OrderActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isFetching: false,
      };
    case OrderActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
      };
    case OrderActionTypes.FETCH_ORDERS_FAILURE:
    case OrderActionTypes.CREATE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
