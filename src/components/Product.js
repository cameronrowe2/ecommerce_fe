import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCartProduct, addWishlistProduct } from "../actions";

class DealProduct extends React.Component {
  renderCartButton(product_id) {
    return (
      <button
        className="ui button cart"
        onClick={() => {
          this.props.addCartProduct(product_id);
        }}
      >
        Add to Cart
      </button>
    );
  }

  renderWishlistButton(product_id) {
    if (this.props.is_signed_in) {
      return (
        <button
          className="ui button wishlist"
          onClick={() => {
            this.props.addWishlistProduct(product_id);
          }}
        >
          Add to Wishlist
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    const productsPrice =
      this.props.product.price_deal != null ? (
        <div>
          <span style={{ textDecoration: "line-through" }}>
            ${this.props.product.price}
          </span>{" "}
          <span>${this.props.product.price_deal}</span>
        </div>
      ) : (
        <div>${this.props.product.price}</div>
      );
    return (
      <div className="four wide column product" key={this.props.product.id}>
        <i />
        <div>
          <Link
            className="ui big product-title"
            to={`/products/${this.props.product.id}`}
          >
            {this.props.product.title}
          </Link>
          <img
            className="ui image"
            style={{ height: "100px" }}
            src={this.props.product.imageUrl}
            alt="Product"
          />
          {/* <div>{product.description}</div> */}
          {productsPrice}
          {this.renderCartButton(this.props.product.id)}
          {this.renderWishlistButton(this.props.product.id)}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     is_signed_in: state.auth.is_signed_in,
//     order: state.orders[ownProps.match.params.id]
//   };
// };

export default connect(
  null,
  { addCartProduct, addWishlistProduct }
)(DealProduct);
