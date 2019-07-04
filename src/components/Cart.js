import React from "react";
import { connect } from "react-redux";
import { getCartProducts } from "../actions";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCartProducts();
  }

  componentDidUpdate() {
    // this.props.getCartProducts();
  }

  render() {
    return (
      <Link className="item" to="/cart">
        Cart ({this.props.num_products} : ${this.props.total_price})
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    num_products:
      state.cart.cart_items === undefined
        ? "-"
        : state.cart.cart_items.reduce((total, v) => {
            return total + v.quantity;
          }, 0),
    total_price: state.cart.total_price
  };
};

export default connect(
  mapStateToProps,
  { getCartProducts }
)(Cart);
