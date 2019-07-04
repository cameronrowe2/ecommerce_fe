import {
  SIGN_IN,
  SIGN_OUT,
  IS_SIGNED_IN,
  ADMIN_SIGN_IN,
  ADMIN_SIGN_OUT,
  IS_ADMIN_SIGNED_IN
} from "../actions/types";

const INITIAL_STATE = {
  is_signed_in: false,
  is_admin_signed_in: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, is_signed_in: true };
    case SIGN_OUT:
      return { ...state, is_signed_in: false };
    case IS_SIGNED_IN:
      return {
        ...state,
        is_signed_in: action.payload.success === true
      };
    case ADMIN_SIGN_IN:
      return { ...state, is_admin_signed_in: true };
    case ADMIN_SIGN_OUT:
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
