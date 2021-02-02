import watchListReducer from "./watchList";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  watchList: watchListReducer,
});

export default allReducer;
