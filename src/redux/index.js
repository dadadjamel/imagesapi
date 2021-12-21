import { combineReducers } from "redux";
import images from "./reducers/images";
import numPage from "./reducers/numpage";

const rootReducer = combineReducers({
  images,
  numPage,
});

export default rootReducer;
