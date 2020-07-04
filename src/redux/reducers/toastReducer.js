import { TOAST_NEW_STATE } from "../actions/types";

const INITIAL_STATE = {
  position: "bottom-left",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOAST_NEW_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
