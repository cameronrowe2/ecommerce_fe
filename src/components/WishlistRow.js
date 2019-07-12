import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCartProduct, removeWishlistProduct } from "../actions";

class WishlistRow extends React.Component {
  renderCartButton(product_id) {
    return (
      <button
        className="ui button"
        onClick={() => {
          this.props.addCartProduct(product_id);
        }}
      >
        Add to Cart
      </button>
    );
  }

  renderRemoveButton(product_id) {
    return (
      <button
        className="ui button"
        onClick={() => {
          this.props.removeWishlistProduct(product_id);
        }}
      >
        Remove
      </button>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="four wide column">
          <img
            src={this.props.item.product_imageUrl}
            alt={this.props.item.product_title}
            style={{ height: "20px" }}
          />
        </div>
        <div className="four wide column">
          <Link to={`/products/${this.props.item.product_id}`}>
            {this.props.item.product_title}
          </Link>
        </div>
        <div className="four wide column">${this.props.item.product_price}</div>
        <div className="three wide column">
          {this.renderCartButton(this.props.item.product_id)}
        </div>
        <div className="one wide column">
          {this.renderRemoveButton(this.props.item.product_id)}
        </div>
      </React.Fragment>
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
  { addCartProduct, removeWishlistProduct }
)(WishlistRow);
