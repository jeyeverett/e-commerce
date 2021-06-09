import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectCollectionId = (state, props) => props.match.params.collectionId;

export const isShopFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.values(collections)
);

export const selectCollection = createSelector(
    [selectShopCollections, selectCollectionId],
    (collections, collectionId) => collections[collectionId]
);