import { combineReducers, createStore } from 'redux';

import userReducer from './user/user.reducer';
import orderReducer from './orders/orders.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

export function createTestStore() {
  const store = createStore(
    combineReducers({
      user: userReducer,
      order: orderReducer,
      cart: cartReducer,
      directory: directoryReducer,
      shop: shopReducer,
    })
  );
  return store;
}
