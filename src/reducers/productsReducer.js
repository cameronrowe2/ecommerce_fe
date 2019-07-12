import _ from "lodash";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADMIN_EDIT_PRODUCT,
  ADMIN_ADD_PRODUCT,
  ADMIN_REMOVE_PRODUCT
} from "../actions/types";

const INITIAL_STATE = {
  products: {},
  total_pages: undefined
};

export default (state = INITIAL_STATE, action) => {
  let products;
  switch (action.type) {
    case FETCH_PRODUCTS:
      products = { ..._.mapKeys(action.payload.data.products, "id") };
      return {
        ...state,
        products,
        total_pages: action.payload.data.total_pages
      };
    case FETCH_PRODUCT:
    case ADMIN_EDIT_PRODUCT:
    case ADMIN_ADD_PRODUCT:
      products = {
        ...state.products,
        [action.payload.data.id]: action.payload.data
      };
      return { ...state, products };
    // return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_REMOVE_PRODUCT:
      return _.omit(state.products, action.payload.data.product_id);
    default:
      return state;
  }
};
