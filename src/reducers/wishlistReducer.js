import _ from "lodash";
import {
  FETCH_WISHLIST,
  ADD_PRODUCT_WISHLIST,
  REMOVE_PRODUCT_WISHLIST
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WISHLIST:
      return { ..._.mapKeys(action.payload.data, "product_id") };
    case ADD_PRODUCT_WISHLIST:
      return { ..._.mapKeys(action.payload.data, "product_id") };
    case REMOVE_PRODUCT_WISHLIST:
      return { ..._.mapKeys(action.payload.data, "product_id") };
    // case FETCH_PRODUCT:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    // case ADMIN_EDIT_PRODUCT:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    // case ADMIN_ADD_PRODUCT:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    // case ADMIN_REMOVE_PRODUCT:
    //   return _.omit(state, action.payload.data.product_id);
    default:
      return state;
  }
};
