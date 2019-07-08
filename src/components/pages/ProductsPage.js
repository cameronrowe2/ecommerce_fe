import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, fetchProducts, addCartProduct } from "../../actions";
import { Link } from "react-router-dom";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderCartButton(product_id) {
    if (this.props.is_signed_in) {
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
    } else {
      return null;
    }
  }

  renderList() {
    console.log(this.props.products);
    return this.props.products.map(product => {
      return (
        <div className="four wide column" key={product.id}>
          <i />
          <div>
            <Link className="ui large" to={`/products/${product.id}`}>
              {product.title}
            </Link>
            <img
              className="ui image"
              style={{ height: "100px" }}
              src={product.imageUrl}
              alt="Product"
            />
            <div>{product.description}</div>
            <div>${product.price}</div>
            {this.renderCartButton(product.id)}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <div className="ui grid">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products),
    user_id: state.auth.user_id,
    is_signed_in: state.auth.is_signed_in
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, fetchProducts, addCartProduct }
)(ProductsPage);
