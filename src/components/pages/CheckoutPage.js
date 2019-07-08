import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../CheckoutForm";
import { connect } from "react-redux";

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_ACZiKaOIWStC4nVZBKdE3Lcb00HwMn0Z2P">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     cart: state.cart
//   };
// };

export default connect(
  null,
  null
)(CheckoutPage);
