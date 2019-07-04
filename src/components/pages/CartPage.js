import React from "react";
import { connect } from "react-redux";
import {
  getCartProducts,
  removeCartProduct,
  clearCartProduct,
  addCartProduct,
  checkout
} from "../../actions";

class CartPage extends React.Component {
  componentDidMount() {
    this.props.getCartProducts();
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div class="four wide column">Product</div>
        <div class="four wide column">Product Price</div>
        <div class="four wide column">Quantity</div>
        <div class="two wide column">Quantity Price</div>
        <div class="two wide column" />
      </React.Fragment>
    );
  }

  renderList() {
    return this.props.cart.cart_items.map(item => {
      console.log(item);
      return (
        <React.Fragment key={item.product_id}>
          <div class="four wide column">{item.product_title}</div>
          <div class="four wide column">${item.product_price}</div>
          <div class="four wide column">
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
          <div class="two wide column">
            ${item.quantity * item.product_price}
          </div>
          <div class="two wide column">
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
        <div class="four wide column">
          <h2>Total Price</h2>
        </div>
        <div class="four wide column" />
        <div class="four wide column" />
        <div class="two wide column">${this.props.cart.total_price}</div>
        <div class="two wide column" />
        <div class="four wide column" />
        <div class="four wide column" />
        <div class="four wide column" />
        <div class="two wide column">
          <button
            className="ui button"
            onClick={() => {
              this.props.checkout();
            }}
          >
            Checkout
          </button>
        </div>
        <div class="two wide column" />
      </React.Fragment>
    );
  }

  render() {
    if (this.props.cart.cart_items == undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Cart</h1>
          <div class="ui grid">
            {this.renderHeader()}
            {this.renderList()}
            {this.renderPrice()}
          </div>
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
