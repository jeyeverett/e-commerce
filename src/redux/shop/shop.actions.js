import { ShopActionTypes } from './shop.types';

export const setShopCollections = collections => ({
    type: ShopActionTypes.SET_SHOP_COLLECTIONS,
    payload: collections
});