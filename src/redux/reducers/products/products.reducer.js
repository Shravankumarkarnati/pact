import SHOP_DATA from "./shop_data";
import Categories from "./shop_category";

const INITIAL_STATE = {
  shopData: SHOP_DATA,
  Categories: Categories,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
