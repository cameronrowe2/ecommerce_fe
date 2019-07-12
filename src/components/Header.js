import React from "react";
import Auth from "./Auth";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isAdminSignedIn, adminSignOut, fetchCurrentUser } from "../actions";
import SearchBar from "./SearchBar";
import EmailValidation from "./EmailValidation";

// const Header = props => {
class Header extends React.Component {
  componentDidMount() {
    this.props.isAdminSignedIn();
    this.props.fetchCurrentUser();
  }

  render() {
    let headerElements;
    const headerClass = this.props.is_admin_signed_in
      ? "admin-header-menu"
      : "header-menu";

    if (!this.props.is_admin_signed_in) {
      let orders = "",
        cart = "",
        wishlist = "";
      if (this.props.is_signed_in) {
        orders = (
          <Link className="item" to="/orders">
            Orders
          </Link>
        );
        wishlist = (
          <Link className="item" to="/wishlist">
            Wishlist
          </Link>
        );
      }

      headerElements = (
        <div className="ui secondary pointing menu">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/products">
            Products
          </Link>
          <Cart />
          {orders}
          {wishlist}
          <SearchBar />
          <Auth />
        </div>
      );
    } else {
      headerElements = (
        <div className="ui secondary pointing menu">
          <Link className="item" to="/admin">
            Home
          </Link>
          <Link className="item" to="/adminproducts">
            Products
          </Link>
          <Link className="item" to="/adminusers">
            Users
          </Link>
          <Link className="item" to="/adminorders">
            Orders
          </Link>
          <Link className="item" to="/admincategories">
            Categories
          </Link>
          <div className="right menu">
            <div
              className="ui item"
              onClick={() => {
                this.props.adminSignOut();
              }}
            >
              Sign Out
            </div>
          </div>
        </div>
      );
    }

    let emailValidation;
    if (
      this.props.is_signed_in &&
      this.props.user.email_validated === 0 &&
      !this.props.verification_email_sent
    ) {
      emailValidation = <EmailValidation />;
    } else {
      emailValidation = "";
    }

    return (
      <div>
        <div className={headerClass}>
          <div className="ui container">{headerElements}</div>
        </div>
        {emailValidation}
      </div>
    );
  }
}

// export default Header;

const mapStateToProps = state => {
  return {
    is_signed_in: state.auth.is_signed_in,
    is_admin_signed_in: state.auth.is_admin_signed_in,
    user: state.user.user,
    verification_email_sent: state.user.verification_email_sent
  };
};

export default connect(
  mapStateToProps,
  { isAdminSignedIn, adminSignOut, fetchCurrentUser }
)(Header);
