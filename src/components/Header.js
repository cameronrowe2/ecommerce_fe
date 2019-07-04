import React from "react";
import Auth from "./Auth";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isAdminSignedIn, adminSignOut } from "../actions";

// const Header = props => {
class Header extends React.Component {
  componentDidMount() {
    this.props.isAdminSignedIn();
  }

  render() {
    if (!this.props.is_admin_signed_in) {
      let orders = "";
      if (this.props.is_signed_in) {
        orders = (
          <Link className="item" to="/orders">
            Orders
          </Link>
        );
      }

      return (
        <div className="ui secondary pointing menu">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/products">
            Products
          </Link>
          <Cart />
          {orders}
          <Auth />
        </div>
      );
    } else {
      return (
        <div className="ui secondary pointing menu">
          <Link className="item" to="/admin">
            Home
          </Link>
          <Link className="item" to="/adminproducts">
            Products
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
  }
}

// export default Header;

const mapStateToProps = state => {
  return {
    is_signed_in: state.auth.is_signed_in,
    is_admin_signed_in: state.auth.is_admin_signed_in
  };
};

export default connect(
  mapStateToProps,
  { isAdminSignedIn, adminSignOut }
)(Header);
