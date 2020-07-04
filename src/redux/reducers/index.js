import { combineReducers } from "redux";
import toastReducer from "./toastReducer";

export default combineReducers({
  toastState: toastReducer,
});
