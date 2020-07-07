import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectShopData = createSelector(
  selectProducts,
  (products) => products.shopData
);

export const selectCategory = createSelector(
  selectProducts,
  (products) => products.Categories
);

export const selectShopDataForPreview = createSelector(
  selectShopData,
  (shopData) => Object.keys(shopData).map((key) => shopData[key])
);

export const selectShopItem = (params) =>
  createSelector([selectShopData], (shopData) => shopData[params]);
