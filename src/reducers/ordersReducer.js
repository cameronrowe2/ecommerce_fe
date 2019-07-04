import { FETCH_ORDERS, FETCH_ORDER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, ...action.payload.data };
    case FETCH_ORDER:
      console.log(action.payload.data);
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
};
