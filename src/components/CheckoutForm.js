import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { connect } from "react-redux";
import { checkout } from "../actions";
import history from "../history";
import Delivery from "./Delivery";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    if (this.props.stripe) {
      let payload = await this.props.stripe.createToken();
      if (payload.token) {
        // let response = await endpoint.post("/checkout", {
        //   token_id: payload.token.id
        // });
        this.props.checkout(
          {
            token_id: payload.token.id,
            delivery_code: this.props.delivery.option.code,
            delivery_name: this.props.delivery.option.name,
            delivery_price: this.props.delivery.option.price
          },
          () => {
            history.push("/");
          }
        );
      } else {
        console.log("Payload error", payload);
      }
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  }

  render() {
    const sendBtn = this.props.delivery.option ? (
      <button onClick={this.submit}>Send</button>
    ) : (
      ""
    );

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <p>Total: ${this.props.cart.total_price}</p>
        <Delivery />
        <CardElement />
        {sendBtn}
      </div>
    );
  }
}

// export default injectStripe(CheckoutForm);

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
    delivery: state.delivery
  };
};

export default connect(
  mapStateToProps,
  { checkout }
)(injectStripe(CheckoutForm));
