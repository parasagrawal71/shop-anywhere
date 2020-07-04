import {
  TOAST_NEW_STATE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_FOR_LATER,
  MOVE_TO_CART,
  REMOVE_SAVE_FOR_LATER,
  UPDATE_PRODUCT_COUNT,
} from "./types";

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

export const saveForLater = (newItem) => {
  return {
    type: SAVE_FOR_LATER,
    payload: newItem,
  };
};

export const moveToCart = (item) => {
  return {
    type: MOVE_TO_CART,
    payload: item,
  };
};

export const removeSaveForLater = (item) => {
  return {
    type: REMOVE_SAVE_FOR_LATER,
    payload: item,
  };
};

export const updateProductCount = (updatedItem) => {
  return {
    type: UPDATE_PRODUCT_COUNT,
    payload: updatedItem,
  };
};
