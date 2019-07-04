import _ from "lodash";
import {
  ADMIN_FETCH_USERS,
  ADMIN_FETCH_USER,
  ADMIN_ADD_USER,
  ADMIN_REMOVE_USER
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADMIN_FETCH_USERS:
      return { ..._.mapKeys(action.payload.data, "id") };
    case ADMIN_ADD_USER:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_REMOVE_USER:
      return _.omit(state, action.payload.data.admin_user_id);
    case ADMIN_FETCH_USER:
      return { ...state, [action.payload.data.id]: action.payload.data };
    // case ADMIN_EDIT_PRODUCT:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    // case ADMIN_ADD_PRODUCT:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
};
