import React from "react";
import { Field, reduxForm } from "redux-form";

class AdminProductsForm extends React.Component {
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
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Field
          name="imageUrl"
          component={this.renderInput}
          label="Enter Image URL"
        />
        <Field name="price" component={this.renderInput} label="Enter Price" />
        <Field name="sku" component={this.renderInput} label="Enter SKU" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "adminproduct"
})(AdminProductsForm);
