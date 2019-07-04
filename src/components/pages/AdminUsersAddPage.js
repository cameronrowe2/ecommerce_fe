import React from "react";
import { adminAddUser } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import history from "../../history";

class AdminUsersAddPage extends React.Component {
  onSubmit = formValues => {
    this.props.adminAddUser(formValues, () => {
      history.push("/adminusers");
    });
  };

  renderInput = ({ input, label, meta }) => {
    // const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
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
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return { is_signed_in: state.auth.is_signed_in };
// };

const adminUsersAddPage = reduxForm({
  form: "adduser"
})(AdminUsersAddPage);

export default connect(
  null,
  { adminAddUser }
)(adminUsersAddPage);
