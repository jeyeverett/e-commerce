import OrderActionTypes from './orders.types';

const INITIAL_STATE = {
  orders: null,
  error: null,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.CREATE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case OrderActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default orderReducer;
