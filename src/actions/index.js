import endpoint from "../apis/endpoint";
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  IS_SIGNED_IN,
  ADMIN_SIGN_IN,
  ADMIN_SIGN_OUT,
  IS_ADMIN_SIGNED_IN,
  ADMIN_EDIT_PRODUCT,
  ADMIN_ADD_PRODUCT,
  ADMIN_FETCH_USERS,
  ADMIN_FETCH_USER,
  ADMIN_ADD_USER,
  ADMIN_REMOVE_USER,
  ADMIN_CHANGE_EMAIL,
  ADMIN_CHANGE_NAME,
  ADMIN_CHANGE_PASSWORD,
  ADMIN_FETCH_ORDERS,
  ADMIN_FETCH_ORDER,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_DEALS,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLEAR_PRODUCT_CART,
  GET_PRODUCTS_CART,
  CHECKOUT,
  FETCH_ORDERS,
  FETCH_ORDER,
  ADMIN_REMOVE_PRODUCT,
  DELIVERY,
  SET_DELIVERY_OPTION,
  FETCH_WISHLIST,
  ADD_PRODUCT_WISHLIST,
  REMOVE_PRODUCT_WISHLIST,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  CATEGORIES_SELECT,
  SET_SEARCH_TERM,
  ADMIN_REMOVE_CATEGORY,
  ADMIN_ADD_CATEGORY,
  ADMIN_EDIT_CATEGORY,
  FETCH_CURRENT_USER,
  VERIFY_EMAIL,
  SEND_VERIFICATION_EMAIL
} from "./types";

export const signIn = (values, callback) => async dispatch => {
  const response = await endpoint.post("/signin", values);

  dispatch({ type: SIGN_IN });
  if (response.data.success) {
    callback();
  }
};

export const signOut = () => async dispatch => {
  const response = await endpoint.post("/signout");

  dispatch({ type: SIGN_OUT });
};

export const signUp = (values, callback) => async dispatch => {
  const response = await endpoint.post("/signup", values);

  dispatch({ type: SIGN_UP });
  if (response.data.success) {
    callback();
  }
};

export const isSignedIn = () => async dispatch => {
  const response = await endpoint.post("/issignedin");

  dispatch({ type: IS_SIGNED_IN, payload: response.data });
};

export const fetchProducts = (values, callback) => async dispatch => {
  const response = await endpoint.post("/products", values);

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  if (response.data.success) {
    if (callback) {
      callback();
    }
  }
};

export const fetchProduct = id => async dispatch => {
  const response = await endpoint.post(`/product`, {
    product_id: id
  });
  dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const fetchDeals = () => async dispatch => {
  const response = await endpoint.post("/deals");

  dispatch({ type: FETCH_DEALS, payload: response.data });
};

export const addCartProduct = product_id => async dispatch => {
  const response = await endpoint.post("/cart_add", { product_id });

  dispatch({ type: ADD_PRODUCT_CART, payload: response.data });
};

export const removeCartProduct = product_id => async dispatch => {
  const response = await endpoint.post("/cart_delete", { product_id });

  dispatch({ type: REMOVE_PRODUCT_CART, payload: response.data });
};

export const clearCartProduct = product_id => async dispatch => {
  const response = await endpoint.post("/cart_clear_product", { product_id });

  dispatch({ type: CLEAR_PRODUCT_CART, payload: response.data });
};

export const getCartProducts = () => async dispatch => {
  const response = await endpoint.post(`/cart`);

  dispatch({ type: GET_PRODUCTS_CART, payload: response.data });
};

export const checkout = (values, callback) => async dispatch => {
  const response = await endpoint.post(`/checkout`, values);

  dispatch({ type: CHECKOUT, payload: response.data });
  if (response.data.success) {
    callback();
  }
};

export const fetchOrders = () => async dispatch => {
  const response = await endpoint.post(`/orders`);

  dispatch({ type: FETCH_ORDERS, payload: response.data });
};

export const fetchOrder = id => async dispatch => {
  const response = await endpoint.post(`/order`, {
    order_id: id
  });
  dispatch({ type: FETCH_ORDER, payload: response.data });
};

export const adminSignIn = (values, callback) => async dispatch => {
  const response = await endpoint.post("/admin_signin", values);

  dispatch({ type: ADMIN_SIGN_IN });
  if (response.data.success) {
    callback();
  }
};

export const isAdminSignedIn = () => async dispatch => {
  const response = await endpoint.post("/isadmin_signedin");

  dispatch({ type: IS_ADMIN_SIGNED_IN, payload: response.data });
};

export const adminSignOut = () => async dispatch => {
  const response = await endpoint.post("/admin_signout");

  dispatch({ type: ADMIN_SIGN_OUT });
};

export const adminEditProduct = (values, callback) => async dispatch => {
  const response = await endpoint.post("/admin_edit_product", values);

  dispatch({ type: ADMIN_EDIT_PRODUCT, payload: response.data });
  if (response.data.success) {
    callback();
  }
};

export const adminAddProduct = (values, callback) => async dispatch => {
  const response = await endpoint.post("/admin_add_product", values);

  dispatch({ type: ADMIN_ADD_PRODUCT, payload: response.data });
  if (response.data.success) {
    callback();
  }
};

export const adminFetchUsers = () => async dispatch => {
  const response = await endpoint.post("/admin_users");

  dispatch({ type: ADMIN_FETCH_USERS, payload: response.data });
};

export const adminFetchUser = id => async dispatch => {
  const response = await endpoint.post(`/admin_user`, {
    id
  });
  dispatch({ type: ADMIN_FETCH_USER, payload: response.data });
};

export const adminRemoveProduct = product_id => async dispatch => {
  const response = await endpoint.post("/admin_remove_product", {
    id: product_id
  });

  dispatch({ type: ADMIN_REMOVE_PRODUCT, payload: response.data });
};

export const adminAddUser = (values, callback) => async dispatch => {
  const response = await endpoint.post("/admin_add_user", values);

  dispatch({ type: ADMIN_ADD_USER, payload: response.data });
  if (response.data.success) {
    callback();
  }
};

export const adminRemoveUser = id => async dispatch => {
  const response = await endpoint.post("/admin_remove_user", {
    id
  });

  dispatch({ type: ADMIN_REMOVE_USER, payload: response.data });
};

export const adminChangeName = values => async dispatch => {
  const response = await endpoint.post("/admin_change_name", values);

  dispatch({ type: ADMIN_CHANGE_NAME, payload: response.data });
};

export const adminChangeEmail = values => async dispatch => {
  const response = await endpoint.post("/admin_change_email", values);

  dispatch({ type: ADMIN_CHANGE_EMAIL, payload: response.data });
};

export const adminChangePassword = values => async dispatch => {
  const response = await endpoint.post("/admin_change_password", values);

  dispatch({ type: ADMIN_CHANGE_PASSWORD, payload: response.data });
};

export const fetchAdminOrders = () => async dispatch => {
  const response = await endpoint.post(`/admin_orders`);

  dispatch({ type: ADMIN_FETCH_ORDERS, payload: response.data });
};

export const fetchAdminOrder = id => async dispatch => {
  const response = await endpoint.post(`/admin_order`, {
    order_id: id
  });
  dispatch({ type: ADMIN_FETCH_ORDER, payload: response.data });
};

export const deliveryOptions = values => async dispatch => {
  const response = await endpoint.post("/delivery", values);

  dispatch({ type: DELIVERY, payload: response.data });
};

export const setDeliveryOption = deliveryoption => {
  return { type: SET_DELIVERY_OPTION, payload: deliveryoption };
};

export const fetchWishlist = () => async dispatch => {
  const response = await endpoint.post(`/wishlist`);

  dispatch({ type: FETCH_WISHLIST, payload: response.data });
};

export const addWishlistProduct = product_id => async dispatch => {
  const response = await endpoint.post("/wishlist_add", { product_id });

  dispatch({ type: ADD_PRODUCT_WISHLIST, payload: response.data });
};

export const removeWishlistProduct = product_id => async dispatch => {
  const response = await endpoint.post("/wishlist_remove", { product_id });

  dispatch({ type: REMOVE_PRODUCT_WISHLIST, payload: response.data });
};

export const fetchCategories = () => async dispatch => {
  const response = await endpoint.post("/categories");

  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};

export const fetchCategory = id => async dispatch => {
  const response = await endpoint.post("/category", {
    category_id: id
  });

  dispatch({ type: FETCH_CATEGORY, payload: response.data });
};

export const selectCategory = category_id => {
  return { type: CATEGORIES_SELECT, payload: category_id };
};

export const setSearchTerm = search_term => {
  return { type: SET_SEARCH_TERM, payload: search_term };
};

export const adminAddCategory = (values, callback) => async dispatch => {
  const response = await endpoint.post("/admin_add_category", values);

  dispatch({ type: ADMIN_ADD_CATEGORY, payload: response.data });
  if (response.data.success) {
    callback();
  }
};

export const adminRemoveCategory = id => async dispatch => {
  const response = await endpoint.post("/admin_remove_category", {
    id
  });

  dispatch({ type: ADMIN_REMOVE_CATEGORY, payload: response.data });
};

export const adminEditCategory = (values, callback) => async dispatch => {
  const response = await endpoint.post("/admin_edit_category", values);

  dispatch({ type: ADMIN_EDIT_CATEGORY, payload: response.data });
  if (response.data.success) {
    callback();
  }
};

export const fetchCurrentUser = () => async dispatch => {
  const response = await endpoint.post("/current_user");

  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
};

export const verifyEmail = email_hash => async dispatch => {
  const response = await endpoint.post("/verify_email", { email_hash });

  dispatch({ type: VERIFY_EMAIL, payload: response.data });
};

export const sendVerificationEmail = callback => async dispatch => {
  const response = await endpoint.post("/send_verification_email");

  dispatch({ type: SEND_VERIFICATION_EMAIL, payload: response.data });
};
