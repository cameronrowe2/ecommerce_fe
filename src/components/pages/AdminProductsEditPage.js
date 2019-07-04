import React from "react";
import { fetchProduct, adminEditProduct } from "../../actions";
import { connect } from "react-redux";
import AdminProductsForm from "../AdminProductsForm";
import requireAdminAuth from "../requireAdminAuth";

class AdminProductsEditPage extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.adminEditProduct(formValues);
  };

  render() {
    return (
      <AdminProductsForm
        onSubmit={this.onSubmit}
        initialValues={this.props.product}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchProduct, adminEditProduct }
  )(AdminProductsEditPage)
);
