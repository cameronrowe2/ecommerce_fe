import React from "react";
import { connect } from "react-redux";
import {
  signIn,
  signOut,
  fetchProducts,
  addCartProduct,
  fetchCategories,
  addWishlistProduct
} from "../../actions";
import { Link } from "react-router-dom";
import ProductCategories from "../ProductCategories";
import ReactPaginate from "react-paginate";
import Product from "../Product";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts({
      page_num: 0,
      num_products: 16
    });
    this.props.fetchCategories();
  }

  renderList() {
    return this.props.products.map(product => {
      return <Product key={product.id} product={product} />;
    });
  }

  handlePaginationClick = data => {
    this.props.fetchProducts({
      page_num: data.selected,
      num_products: 16,
      category_id: this.props.categories.selected
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
    signIn,
    signOut,
    fetchProducts,
    addCartProduct,
    fetchCategories,
    addWishlistProduct
  }
)(ProductsPage);
