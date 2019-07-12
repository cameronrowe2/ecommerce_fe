import React, { Component } from "react";
import { connect } from "react-redux";
import Delivery from "./Delivery";
import { sendVerificationEmail } from "../actions";

class EmailValidation extends Component {
  render() {
    return (
      <div className="email-validation">
        <div className="ui container">
          <div>
            Please validate your email address.
            <div
              style={{ display: "inline", cursor: "pointer" }}
              onClick={() => {
                this.props.sendVerificationEmail(() => {
                  console.log("here");
                });
              }}
            >
              {" "}
              Send email again?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     cart: state.cart,
//     delivery: state.delivery
//   };
// };

export default connect(
  null,
  { sendVerificationEmail }
)(EmailValidation);
