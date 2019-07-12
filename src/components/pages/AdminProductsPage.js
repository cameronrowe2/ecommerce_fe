import React from "react";
import { connect } from "react-redux";
import { fetchProducts, adminRemoveProduct } from "../../actions";
import { Link } from "react-router-dom";
import requireAdminAuth from "../requireAdminAuth";
import ReactPaginate from "react-paginate";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts({
      page_num: 0,
      num_products: 20
    });
  }

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
        <React.Fragment key={product.id}>
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
                  this.props.adminRemoveProduct(product.id);
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

  handlePaginationClick = data => {
    this.props.fetchProducts({
      page_num: data.selected,
      num_products: 20
    });
  };

  render() {
    return (
      <div>
        <h2>Products</h2>
        <Link to={`/adminproductsadd`} className="ui button">
          Add Product
        </Link>
        <Link to={`/adminproductsimport`} className="ui button">
          Import Products
        </Link>
        <div className="ui grid adminproducts">
          {this.renderHeader()}
          {this.renderList()}
        </div>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products.products),
    total_pages: state.products.total_pages
    // is_signed_in: state.auth.is_signed_in
  };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchProducts, adminRemoveProduct }
  )(ProductsPage)
);
