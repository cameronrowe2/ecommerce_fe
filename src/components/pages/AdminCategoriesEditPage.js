import React from "react";
import { fetchCategory, adminEditCategory } from "../../actions";
import { connect } from "react-redux";
import AdminCategoriesForm from "../AdminCategoriesForm";
import requireAdminAuth from "../requireAdminAuth";
import history from "../../history";

class AdminCategoriesEditPage extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchCategory(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.adminEditCategory(formValues, () => {
      history.push("/admincategories");
    });
  };

  render() {
    return (
      <AdminCategoriesForm
        initialValues={this.props.category}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { category: state.categories.categories[ownProps.match.params.id] };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchCategory, adminEditCategory }
  )(AdminCategoriesEditPage)
);
