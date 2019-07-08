import React from "react";
import { signIn } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import history from "../../history";
import requireNoAuth from "../requireNoAuth";

class SignInPage extends React.Component {
  onSubmit = formValues => {
    // this.props.signOut();
    console.log(formValues);
    this.props.signIn(formValues, () => {
      history.push("/");
    });
  };

  renderInput = ({ input, label, type }) => {
    // const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} />
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
        <Field
          name="email"
          component={this.renderInput}
          label="Enter Email"
          type="email"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter Password"
          type="password"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return { is_signed_in: state.auth.is_signed_in };
// };

const signInPage = reduxForm({
  form: "signin"
})(SignInPage);

export default requireNoAuth(
  connect(
    null,
    { signIn }
  )(signInPage)
);
