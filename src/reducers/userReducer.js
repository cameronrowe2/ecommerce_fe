import { FETCH_CURRENT_USER, SEND_VERIFICATION_EMAIL } from "../actions/types";

const INITIAL_STATE = {
  user: {
    name: undefined,
    email: undefined,
    email_validated: undefined
  },
  verification_email_sent: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      const user = { ...state.user, ...action.payload.data };
      return { ...state, user };
    case SEND_VERIFICATION_EMAIL:
      return { ...state, verification_email_sent: true };
    default:
      return state;
  }
};
