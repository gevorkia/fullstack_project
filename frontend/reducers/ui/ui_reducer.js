import modalReducer from "./modal_reducer";
import { combineReducers } from "redux";

const UiReducer = combineReducers({
  modal: modalReducer,
});

export default UiReducer;
