import React from "react";
import { Field, reduxForm } from "redux-form";
import history from "../history";
import { connect } from "react-redux";
import { fetchProducts, setSearchTerm } from "../actions";

class SearchBar extends React.Component {
  //   renderError({ error, touched }) {
  //     if (touched && error) {
  //       return (
  //         <div className="ui error message">
  //           <div className="header">{error}</div>
  //         </div>
  //       );
  //     }
  //   }

  renderInput = ({ input, label, meta }) => {
    // const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div /*className={className}*/>
        <label>{label}</label>
        <input {...input} placeholder="Search products" />
        {/* {this.renderError(meta)} */}
      </div>
    );
  };

  onSubmit = formValues => {
    const search_term =
      formValues.search === undefined ? "" : formValues.search;
    if (search_term != "") {
      this.props.setSearchTerm(search_term);
      this.props.fetchProducts(
        {
          page_num: 0,
          num_products: 16,
          search_term: search_term
        },
        () => {
          history.push(`/search/${search_term}`);
        }
      );
    }
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error search-bar-form"
      >
        <Field name="search" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    search_term: state.search
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, setSearchTerm }
)(
  reduxForm({
    form: "adminproduct"
  })(SearchBar)
);
