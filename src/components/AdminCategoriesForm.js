import React from "react";
import { Field, reduxForm } from "redux-form";

class AdminCategoriesForm extends React.Component {
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
        <input {...input} />
        {/* {this.renderError(meta)} */}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "admincategory"
})(AdminCategoriesForm);
