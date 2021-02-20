import { combineReducers } from "redux";
import appReducer from "./appReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  products: productsReducer, 
  app: appReducer
});