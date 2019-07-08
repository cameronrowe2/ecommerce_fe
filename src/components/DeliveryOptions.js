import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setDeliveryOption } from "../actions";

class Delivery extends Component {
  renderDeliveryOptions = () => {
    return this.props.delivery.options.map(option => {
      return (
        <div key={option.code}>
          <label>
            <Field
              name="delivery_option"
              component="input"
              type="radio"
              value={option.code}
            />{" "}
            {option.name}
            {" - $"}
            {option.price}
          </label>
        </div>
      );
    });
  };

  onSelect = formValues => {
    this.props.setDeliveryOption(formValues.delivery_option);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSelect)}
        className="ui form error"
      >
        {this.renderDeliveryOptions()}
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    delivery: state.delivery
  };
};

export default connect(
  mapStateToProps,
  { setDeliveryOption }
)(
  reduxForm({
    form: "deliveryoption"
  })(Delivery)
);
