import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCheckout,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  error: null,
  isFetching: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        cartItems: clearItemFromCheckout(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
      };
    case CartActionTypes.FETCH_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
