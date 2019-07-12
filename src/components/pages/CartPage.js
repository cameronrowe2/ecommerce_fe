import React from "react";
import { connect } from "react-redux";
import {
  getCartProducts,
  removeCartProduct,
  clearCartProduct,
  addCartProduct,
  checkout
} from "../../actions";
import { Link } from "react-router-dom";

class CartPage extends React.Component {
  componentDidMount() {
    this.props.getCartProducts();
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="four wide column">Product</div>
        <div className="four wide column">Product Price</div>
        <div className="four wide column">Quantity</div>
        <div className="two wide column">Quantity Price</div>
        <div className="two wide column" />
      </React.Fragment>
    );
  }

  renderList() {
    return this.props.cart.cart_items.map(item => {
      return (
        <React.Fragment key={item.product_id}>
          <div className="four wide column">{item.product_title}</div>
          <div className="four wide column">${item.product_price}</div>
          <div className="four wide column">
            <button
              className="ui button mini"
              onClick={() => {
                this.props.removeCartProduct(item.product_id);
              }}
            >
              -
            </button>
            {item.quantity}{" "}
            <button
              className="ui button mini"
              onClick={() => {
                this.props.addCartProduct(item.product_id);
              }}
            >
              +
            </button>
          </div>
          <div className="two wide column">
            ${item.quantity * item.product_price}
          </div>
          <div className="two wide column">
            <button
              className="ui button"
              onClick={() => {
                this.props.clearCartProduct(item.product_id);
              }}
            >
              Remove
            </button>
          </div>
        </React.Fragment>
      );
    });
  }

  renderPrice() {
    return (
      <React.Fragment>
        <div className="four wide column">
          <h2>Total Price</h2>
        </div>
        <div className="four wide column" />
        <div className="four wide column" />
        <div className="two wide column">${this.props.cart.total_price}</div>
        <div className="two wide column" />
        <div className="four wide column" />
        <div className="four wide column" />
        <div className="four wide column" />
        <div className="two wide column">
          <Link
            className="ui button"
            to="/checkout"
            // onClick={() => {
            //   // this.props.checkout();
            // }}
          >
            Checkout
          </Link>
        </div>
        <div className="two wide column" />
      </React.Fragment>
    );
  }

  renderCart() {
    if (this.props.cart.cart_items.length === 0) {
      return (
        <div>
          <div>There's nothing in your cart!</div>
          <Link to="/products">Check out our Products!</Link>
        </div>
      );
    } else {
      return (
        <div className="ui grid cart">
          {this.renderHeader()}
          {this.renderList()}
          {this.renderPrice()}
        </div>
      );
    }
  }

  render() {
    if (this.props.cart.cart_items == undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Cart</h1>
          {this.renderCart()}
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    is_signed_in: state.auth.is_signed_in,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  {
    getCartProducts,
    removeCartProduct,
    clearCartProduct,
    addCartProduct,
    checkout
  }
)(CartPage);
