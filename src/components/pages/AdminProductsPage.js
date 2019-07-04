import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import { Link } from "react-router-dom";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  //   renderCartButton(product_id) {
  //     if (this.props.is_signed_in) {
  //       return (
  //         <button
  //           className="ui button"
  //           onClick={() => {
  //             this.props.addCartProduct(product_id);
  //           }}
  //         >
  //           Add to Cart
  //         </button>
  //       );
  //     } else {
  //       return null;
  //     }
  //   }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="one wide column">id</div>
        <div className="one wide column">Img</div>
        <div className="ten wide column">Title</div>
        <div className="two wide column" />
        <div className="two wide column" />
      </React.Fragment>
    );
  }

  renderList() {
    return this.props.products.map(product => {
      return (
        <React.Fragment key={product.sku}>
          <div className="one wide column">{product.id}</div>
          <div className="one wide column">
            <img
              className="ui image"
              style={{ height: "20px" }}
              src={product.imageUrl}
              alt="Product"
            />
          </div>
          <div className="ten wide column">
            <Link className="ui large" to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </div>
          <div className="two wide column">
            <div>
              <Link
                className="ui button"
                to={`/adminproductsedit/${product.id}`}
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="two wide column">
            <div>
              <button
                className="ui button"
                onClick={() => {
                  console.log("here");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <Link to={`/adminproductsadd`} className="ui button">
          Add Product
        </Link>
        <div className="ui grid">
          {this.renderHeader()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products)
    // is_signed_in: state.auth.is_signed_in
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductsPage);
