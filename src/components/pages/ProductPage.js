import React from "react";
import { connect } from "react-redux";
import { fetchProduct, addCartProduct } from "../../actions";

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  onAddToCartClick = () => {
    this.props.addCartProduct(this.props.match.params.id);
  };

  renderCartButton() {
    if (this.props.is_signed_in) {
      return (
        <button className="ui button" onClick={this.onAddToCartClick}>
          Add to Cart
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    let { product } = this.props;
    if (product == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ui grid">
          <div className="sixteen wide column">
            <h2>{product.title}</h2>
            <img
              className="ui image"
              style={{ height: "100px" }}
              src={product.imageUrl}
              alt="Product"
            />
            <div>{product.description}</div>
            <div>${product.price}</div>
            {this.renderCartButton()}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    is_signed_in: state.auth.is_signed_in,
    product: state.products[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchProduct, addCartProduct }
)(ProductPage);
