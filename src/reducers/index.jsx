import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducers";
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
