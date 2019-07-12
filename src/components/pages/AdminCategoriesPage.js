import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CategoryRow from "../CategoryRow";
import { fetchCategories } from "../../actions";
import requireAdminAuth from "../requireAdminAuth";

class AdminCategoriesPage extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="one wide column">id</div>
        <div className="eleven wide column">Title</div>
        <div className="two wide column" />
        <div className="two wide column" />
      </React.Fragment>
    );
  }

  renderList() {
    return this.props.categories.map(category => {
      return <CategoryRow key={category.id} category={category} />;
    });
    // return this.props.products.map(product => {
    //   return (
    //     <React.Fragment key={product.id}>
    //       <div className="one wide column">{product.id}</div>
    //       <div className="one wide column">
    //         <img
    //           className="ui image"
    //           style={{ height: "20px" }}
    //           src={product.imageUrl}
    //           alt="Product"
    //         />
    //       </div>
    //       <div className="ten wide column">
    //         <Link className="ui large" to={`/products/${product.id}`}>
    //           {product.title}
    //         </Link>
    //       </div>
    //       <div className="two wide column">
    //         <div>
    //           <Link
    //             className="ui button"
    //             to={`/adminproductsedit/${product.id}`}
    //           >
    //             Edit
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="two wide column">
    //         <div>
    //           <button
    //             className="ui button"
    //             onClick={() => {
    //               this.props.adminRemoveProduct(product.id);
    //             }}
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   );
    // });
  }

  render() {
    return (
      <div>
        <h2>Categories</h2>
        <Link to={`/admincategoriesadd`} className="ui button">
          Add Category
        </Link>
        <div className="ui grid admincategories">
          {this.renderHeader()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories.categories)
  };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchCategories }
  )(AdminCategoriesPage)
);
