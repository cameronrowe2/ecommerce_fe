import React from "react";
import { adminAddProduct } from "../../actions";
import { connect } from "react-redux";
import AdminProductsForm from "../AdminProductsForm";
import requireAdminAuth from "../requireAdminAuth";

class AdminProductsEditPage extends React.Component {
  onSubmit = formValues => {
    this.props.adminAddProduct(formValues);
  };

  render() {
    return <AdminProductsForm onSubmit={this.onSubmit} />;
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { product: state.products[ownProps.match.params.id] };
// };

export default requireAdminAuth(
  connect(
    null,
    { adminAddProduct }
  )(AdminProductsEditPage)
);
