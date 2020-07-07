import cartActionTypes from "./cart.types";
import { organizeCart, incQuantityItem, decQuantityItem } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: organizeCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case cartActionTypes.INC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: incQuantityItem(state.cartItems, action.payload),
      };

    case cartActionTypes.DEC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decQuantityItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
