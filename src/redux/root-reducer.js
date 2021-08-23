import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//Below we are getting local storage, but we can also get session storage if we wanted (see docs)
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import orderReducer from './orders/orders.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  orders: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
