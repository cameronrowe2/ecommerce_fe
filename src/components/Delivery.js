import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { deliveryOptions } from "../actions";
import DeliveryOptions from "./DeliveryOptions";
import DeliveryPostcode from "./DeliveryPostcode";

class Delivery extends Component {
  render() {
    return (
      <div>
        <DeliveryPostcode />
        <DeliveryOptions />
      </div>
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
  null
)(Delivery);
