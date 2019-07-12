import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import ordersReducer from "./ordersReducer";
import cartReducer from "./cartReducer";
import usersReducer from "./usersReducer";
import deliveryReducer from "./deliveryReducer";
import wishlistReducer from "./wishlistReducer";
import categoriesReducer from "./categoriesReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import dealsReducer from "./dealsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  form: formReducer,
  orders: ordersReducer,
  users: usersReducer,
  delivery: deliveryReducer,
  wishlist: wishlistReducer,
  categories: categoriesReducer,
  search: searchReducer,
  user: userReducer,
  deals: dealsReducer
});
