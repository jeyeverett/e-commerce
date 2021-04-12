import { CartActionTypes } from './cart.types';

//We don't need a payload here because all the reducer will do is toggle the boolean hidden property value
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
