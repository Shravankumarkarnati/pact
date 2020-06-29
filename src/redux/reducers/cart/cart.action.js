import cartActionTypes from "./cart.types";

export const cartAddItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const decItemQuantity = (item) => {
  return {
    type: cartActionTypes.DEC_ITEM_QUANTITY,
    payload: item,
  };
};

export const incItemQuantity = (item) => {
  return {
    type: cartActionTypes.INC_ITEM_QUANTITY,
    payload: item,
  };
};

export const removeItemFromCheckout = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM_FROM_CHECKOUT,
    payload: item,
  };
};
