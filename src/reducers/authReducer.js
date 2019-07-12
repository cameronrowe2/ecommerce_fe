import {
  SIGN_IN,
  SIGN_OUT,
  IS_SIGNED_IN,
  ADMIN_SIGN_IN,
  ADMIN_SIGN_OUT,
  IS_ADMIN_SIGNED_IN
} from "../actions/types";

const INITIAL_STATE = {
  is_signed_in: localStorage.is_signed_in ? true : false,
  is_admin_signed_in: localStorage.is_admin_signed_in ? true : false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.is_signed_in = true;
      return { ...state, is_signed_in: true };
    case SIGN_OUT:
      delete localStorage.is_signed_in;
      return { ...state, is_signed_in: false };
    case IS_SIGNED_IN:
      return {
        ...state,
        is_signed_in: action.payload.success === true
      };
    case ADMIN_SIGN_IN:
      localStorage.is_admin_signed_in = true;
      return { ...state, is_admin_signed_in: true };
    case ADMIN_SIGN_OUT:
      delete localStorage.is_admin_signed_in;
      return { ...state, is_admin_signed_in: false };
    case IS_ADMIN_SIGNED_IN:
      return {
        ...state,
        is_admin_signed_in: action.payload.success === true
      };
    default:
      return state;
  }
};
