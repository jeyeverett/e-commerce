import { createSelector } from 'reselect';

//Input selectors don't use createSelector and are used to simply provide a slice of state
const selectCart = state => state.cart;

//
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);