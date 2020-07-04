import { TOAST_NEW_STATE, ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const updateToastState = (state) => {
  return {
    type: TOAST_NEW_STATE,
    payload: state,
  };
};

export const addToCart = (newItem) => {
  return {
    type: ADD_TO_CART,
    payload: newItem,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
