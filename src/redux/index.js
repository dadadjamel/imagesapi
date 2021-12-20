import { combineReducers } from "redux";
import images from "./reducers/images";
import numPage from "./reducers/numPage";

const rootReducer = combineReducers({
  images,
  numPage,
});

export default rootReducer;
