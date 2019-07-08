import React from "react";
import { signUp } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import history from "../../history";
import requireNoAuth from "../requireNoAuth";

class SignUpPage extends React.Component {
  onSubmit = formValues => {
    this.props.signUp(formValues, () => {
      history.push("/signin");
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
          name="name"
          component={this.renderInput}
          label="Enter Name"
          type="text"
        />
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
        <Field
          name="password2"
          component={this.renderInput}
          label="Enter Password Again"
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

const signUpPage = reduxForm({
  form: "signup"
})(SignUpPage);

export default requireNoAuth(
  connect(
    null,
    { signUp }
  )(signUpPage)
);
