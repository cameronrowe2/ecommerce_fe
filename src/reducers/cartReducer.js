import _ from "lodash";
import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  GET_PRODUCTS_CART,
  CLEAR_PRODUCT_CART,
  CHECKOUT
} from "../actions/types";

const INITIAL_STATE = {
  cart_items: [],
  total_price: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      // return { ...state, [action.payload.id]: action.payload };
      // return [...action.payload];
      return { ...state, ...action.payload.data };
    case REMOVE_PRODUCT_CART:
      // return _.omit(state, action.payload);
      // return [...action.payload];
      return { ...state, ...action.payload.data };
    case CLEAR_PRODUCT_CART:
      // return state;
      return { ...state, ...action.payload.data };
    case GET_PRODUCTS_CART:
      // return { ...state, ..._.mapKeys(action.payload, "id") };
      return { ...state, ...action.payload.data };
    case CHECKOUT:
      state.cart_items = [];
      state.total_price = 0;
      return { ...state };
    default:
      return state;
  }
};
