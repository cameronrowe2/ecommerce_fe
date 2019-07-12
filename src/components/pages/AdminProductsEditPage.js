import React from "react";
import { fetchProduct, adminEditProduct, fetchCategories } from "../../actions";
import { connect } from "react-redux";
import AdminProductsForm from "../AdminProductsForm";
import requireAdminAuth from "../requireAdminAuth";
import history from "../../history";

class AdminProductsEditPage extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.props.fetchCategories();
  }

  onSubmit = formValues => {
    this.props.adminEditProduct(formValues, () => {
      history.push("/adminproducts");
    });
  };

  render() {
    if (this.props.product !== undefined && this.props.categories.length > 0) {
      return (
        <AdminProductsForm
          onSubmit={this.onSubmit}
          categories={this.props.categories}
          initialValues={this.props.product}
        />
      );
    } else {
      return (
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.products[ownProps.match.params.id],
    categories: Object.values(state.categories.categories)
  };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchProduct, adminEditProduct, fetchCategories }
  )(AdminProductsEditPage)
);
