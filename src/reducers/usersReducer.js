import _ from "lodash";
import {
  ADMIN_FETCH_USERS,
  ADMIN_FETCH_USER,
  ADMIN_ADD_USER,
  ADMIN_REMOVE_USER,
  ADMIN_CHANGE_EMAIL,
  ADMIN_CHANGE_NAME,
  ADMIN_CHANGE_PASSWORD
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
    case ADMIN_CHANGE_NAME:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_CHANGE_EMAIL:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case ADMIN_CHANGE_PASSWORD:
      return { ...state };
    default:
      return state;
  }
};
