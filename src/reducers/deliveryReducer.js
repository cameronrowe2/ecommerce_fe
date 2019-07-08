import { DELIVERY, SET_DELIVERY_OPTION } from "../actions/types";

const INITIAL_STATE = {
  option: undefined,
  options: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELIVERY:
      return { options: action.payload.data.services.service };
    case SET_DELIVERY_OPTION:
      const option = state.options.filter(
        option => option.code === action.payload
      )[0];
      return { ...state, option };
    default:
      return state;
  }
};
