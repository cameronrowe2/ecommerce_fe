import React from "react";
import { adminAddProduct, fetchCategories } from "../../actions";
import { connect } from "react-redux";
import AdminProductsForm from "../AdminProductsForm";
import requireAdminAuth from "../requireAdminAuth";
import history from "../../history";

class AdminProductsEditPage extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  onSubmit = formValues => {
    this.props.adminAddProduct(formValues, () => {
      history.push("/adminproducts");
    });
  };

  render() {
    return (
      <AdminProductsForm
        categories={this.props.categories}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return { categories: Object.values(state.categories.categories) };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { adminAddProduct, fetchCategories }
  )(AdminProductsEditPage)
);
