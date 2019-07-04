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
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  CLEAR_PRODUCT_CART,
  GET_PRODUCTS_CART,
  CHECKOUT,
  FETCH_ORDERS,
  FETCH_ORDER,
  ADMIN_REMOVE_PRODUCT
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

export const fetchProducts = () => async dispatch => {
  const response = await endpoint.get("/products");

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => {
  const response = await endpoint.post(`/product`, {
    product_id: id
  });
  dispatch({ type: FETCH_PRODUCT, payload: response.data });
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

export const checkout = () => async dispatch => {
  const response = await endpoint.post(`/checkout`);

  dispatch({ type: CHECKOUT, payload: response.data });
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

export const adminEditProduct = values => async dispatch => {
  const response = await endpoint.post("/admin_edit_product", values);

  dispatch({ type: ADMIN_EDIT_PRODUCT, payload: response.data });
};

export const adminAddProduct = values => async dispatch => {
  const response = await endpoint.post("/admin_add_product", values);

  dispatch({ type: ADMIN_ADD_PRODUCT, payload: response.data });
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
