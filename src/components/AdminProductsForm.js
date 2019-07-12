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

  renderSelect = ({ input, label }) => {
    const options = this.props.categories.map(category => {
      if (
        this.props.initialValues &&
        this.props.initialValues.category_id == category.id
      ) {
        return (
          <option key={category.id} value={category.id} selected>
            {category.title}
          </option>
        );
      } else {
        return (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        );
      }
    });

    return (
      <div /*className={className}*/>
        <label>{label}</label>
        <select {...input}>{options}</select>
        {/* {this.renderError(meta)} */}
      </div>
    );
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
        <Field
          name="price_deal"
          component={this.renderInput}
          label="Enter Deal Price"
        />
        <Field name="sku" component={this.renderInput} label="Enter SKU" />

        <Field
          name="weight"
          component={this.renderInput}
          label="Enter Weight (kgs)"
        />
        <Field
          name="height"
          component={this.renderInput}
          label="Enter Height (cms)"
        />
        <Field
          name="width"
          component={this.renderInput}
          label="Enter Width (cms)"
        />
        <Field
          name="length"
          component={this.renderInput}
          label="Enter Length (cms)"
        />
        <Field
          name="category_id"
          component={this.renderSelect}
          label="Select Category"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "adminproduct"
})(AdminProductsForm);
