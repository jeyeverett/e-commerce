import { createSelector } from 'reselect';

const selectOrders = (state) => state.orders;

export const selectOrderItems = createSelector(
  [selectOrders],
  (orders) => orders
);

export const isOrdersFetching = createSelector(
  [selectOrders],
  (orders) => orders.isFetching
);

export const selectOrdersTotal = createSelector([selectOrderItems], (orders) =>
  orders.reduce((total, order) => (total += order.orderTotal), 0)
);
