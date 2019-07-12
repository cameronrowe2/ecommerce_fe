import _ from "lodash";
import { FETCH_DEALS } from "../actions/types";

const INITIAL_STATE = {
  products: {}
};

export default (state = INITIAL_STATE, action) => {
  let products;
  switch (action.type) {
    case FETCH_DEALS:
      products = { ..._.mapKeys(action.payload.data.products, "id") };
      return {
        ...state,
        products
      };
    default:
      return state;
  }
};
