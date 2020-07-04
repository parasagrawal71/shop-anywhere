import { TOAST_NEW_STATE } from "./types";

export const updateToastState = (state) => {
  return {
    type: TOAST_NEW_STATE,
    payload: state,
  };
};

export const dummy = "eslint";
