import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import ordersReducer from "./ordersReducer";
import cartReducer from "./cartReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  form: formReducer,
  orders: ordersReducer
});
