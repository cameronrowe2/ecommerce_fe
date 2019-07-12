import React from "react";
import { adminAddCategory } from "../../actions";
import { connect } from "react-redux";
import AdminCategoriesForm from "../AdminCategoriesForm";
import requireAdminAuth from "../requireAdminAuth";
import history from "../../history";

class AdminProductsEditPage extends React.Component {
  onSubmit = formValues => {
    this.props.adminAddCategory(formValues, () => {
      history.push("/admincategories");
    });
  };

  render() {
    return <AdminCategoriesForm onSubmit={this.onSubmit} />;
  }
}

// const mapStateToProps = state => {
//   return { categories: Object.values(state.categories.categories) };
// };

export default requireAdminAuth(
  connect(
    null,
    { adminAddCategory }
  )(AdminProductsEditPage)
);
