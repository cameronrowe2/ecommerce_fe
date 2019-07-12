import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { deliveryOptions } from "../actions";

class Delivery extends Component {
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
    // console.log(formValues);
    this.props.deliveryOptions(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="address"
          component={this.renderInput}
          label="Destination Address"
        />
        <Field
          name="suburb"
          component={this.renderInput}
          label="Destination Suburb"
        />
        <Field
          name="postcode"
          component={this.renderInput}
          label="Destination Postcode"
        />
        <Field
          name="country"
          component={this.renderInput}
          label="Destination Country"
        />
        <Field
          name="email"
          component={this.renderInput}
          label="Email Address"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     delivery: state.delivery
//   };
// };

export default connect(
  null,
  { deliveryOptions }
)(
  reduxForm({
    form: "deliverypostcode"
  })(Delivery)
);
