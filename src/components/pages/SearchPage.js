import React from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  addCartProduct,
  fetchCategories,
  addWishlistProduct
} from "../../actions";
import { Link } from "react-router-dom";
import ProductCategories from "../ProductCategories";
import ReactPaginate from "react-paginate";

class SearchPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts({
      page_num: 0,
      num_products: 16,
      search_term: this.props.match.params.term
    });
    this.props.fetchCategories();
  }

  renderCartButton(product_id) {
    // if (this.props.is_signed_in) {
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
    // } else {
    // return null;
    // }
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

  renderList() {
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
            {/* <div>{product.description}</div> */}
            <div>${product.price}</div>
            {this.renderCartButton(product.id)}
            {this.renderWishlistButton(product.id)}
          </div>
        </div>
      );
    });
  }

  handlePaginationClick = data => {
    this.props.fetchProducts({
      page_num: data.selected,
      num_products: 16,
      category_id: this.props.categories.selected,
      search_term: this.props.match.params.term
    });
  };

  render() {
    return (
      <div>
        <h2>Products</h2>
        <div className="ui grid">
          <div className="four wide column">
            <h3>Categories</h3>
            <ProductCategories />
          </div>
          <div className="twelve wide column">
            <div className="ui grid">{this.renderList()}</div>
            <div id="react-paginate">
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.props.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePaginationClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products.products),
    total_pages: state.products.total_pages,
    user_id: state.auth.user_id,
    is_signed_in: state.auth.is_signed_in,
    categories: Object.values(state.categories)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchProducts,
    addCartProduct,
    fetchCategories,
    addWishlistProduct
  }
)(SearchPage);
