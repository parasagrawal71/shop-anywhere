import { combineReducers } from "redux";
import toastReducer from "./toastReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  toastState: toastReducer,
  cart: cartReducer,
});
