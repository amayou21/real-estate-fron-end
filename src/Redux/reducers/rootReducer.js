import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
// import BrandReducer from "./brandReducer";
export default combineReducers({
  allCategory: CategoryReducer,
});
