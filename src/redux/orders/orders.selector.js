import { createSelector } from 'reselect';

const selectOrders = (state) => state.orders;

export const selectCurrentUser = createSelector(
  [selectOrders],
  (orders) => orders
);
