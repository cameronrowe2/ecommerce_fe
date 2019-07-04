import _ from "lodash";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADMIN_EDIT_PRODUCT,
  ADMIN_ADD_PRODUCT
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ..._.mapKeys(action.payload.data, "id") };
    case FETCH_PRODUCT:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_EDIT_PRODUCT:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_ADD_PRODUCT:
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
};
