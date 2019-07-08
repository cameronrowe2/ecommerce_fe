import {
  FETCH_ORDERS,
  FETCH_ORDER,
  ADMIN_FETCH_ORDERS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, ...action.payload.data };
    case FETCH_ORDER:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_FETCH_ORDERS:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
};
