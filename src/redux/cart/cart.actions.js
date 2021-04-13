import { CartActionTypes } from './cart.types';

//We don't need a payload here because all the reducer will do is toggle the boolean hidden property value
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCheckout = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT,
    payload: item
});