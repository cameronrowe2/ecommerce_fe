import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import OrdersPage from "./pages/OrdersPage";
import OrderPage from "./pages/OrderPage";
import history from "../history";
import AdminSignInPage from "./pages/AdminSignInPage";
import AdminPage from "./pages/AdminPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminProductsEditPage from "./pages/AdminProductsEditPage";
import AdminProductsAddPage from "./pages/AdminProductsAddPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdminUsersAddPage from "./pages/AdminUsersAddPage";
import AdminUsersEditPage from "./pages/AdminUsersEditPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminOrderPage from "./pages/AdminOrderPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import SearchPage from "./pages/SearchPage";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import AdminCategoriesAddPage from "./pages/AdminCategoriesAddPage";
import AdminCategoriesEditPage from "./pages/AdminCategoriesEditPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";

const App = props => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <div className="ui container content">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/products" exact component={ProductsPage} />
              <Route path="/cart" exact component={CartPage} />
              <Route path="/products/:id" exact component={ProductPage} />
              <Route path="/signin" exact component={SignInPage} />
              <Route path="/signup" exact component={SignUpPage} />
              <Route path="/orders" exact component={OrdersPage} />
              <Route path="/orders/:id" exact component={OrderPage} />
              <Route path="/checkout" exact component={CheckoutPage} />
              <Route path="/adminsignin" exact component={AdminSignInPage} />
              <Route path="/admin" exact component={AdminPage} />
              <Route
                path="/adminproducts"
                exact
                component={AdminProductsPage}
              />
              <Route
                path="/adminproductsedit/:id"
                exact
                component={AdminProductsEditPage}
              />
              <Route
                path="/adminproductsadd"
                exact
                component={AdminProductsAddPage}
              />
              <Route path="/adminusers" exact component={AdminUsersPage} />
              <Route
                path="/adminusersadd"
                exact
                component={AdminUsersAddPage}
              />
              <Route
                path="/adminusers/:id"
                exact
                component={AdminUsersEditPage}
              />
              <Route path="/adminorders" exact component={AdminOrdersPage} />
              <Route path="/adminorders/:id" exact component={AdminOrderPage} />
              <Route
                path="/admincategories"
                exact
                component={AdminCategoriesPage}
              />
              <Route
                path="/admincategoriesadd"
                exact
                component={AdminCategoriesAddPage}
              />
              <Route
                path="/admincategoriesedit/:id"
                exact
                component={AdminCategoriesEditPage}
              />

              <Route path="/wishlist" exact component={WishlistPage} />
              <Route path="/search/:term" exact component={SearchPage} />
              <Route
                path="/verifyemail/:email_hash"
                exact
                component={VerifyEmailPage}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return { is_admin_signed_in: state.auth.is_admin_signed_in };
};

export default connect(
  mapStateToProps,
  null
)(App);
