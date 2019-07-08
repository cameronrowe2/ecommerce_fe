import React from "react";
import {
  adminFetchUser,
  adminChangeEmail,
  adminChangeName,
  adminChangePassword
} from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import history from "../../history";
import AdminChangeEmail from "../AdminChangeEmail";
import AdminChangeName from "../AdminChangeName";
import AdminChangePassword from "../AdminChangePassword";

class AdminUsersAddPage extends React.Component {
  componentDidMount() {
    this.props.adminFetchUser(this.props.match.params.id);
  }

  render() {
    console.log(this.props.admin_user);

    return (
      <div>
        <AdminChangeName
          initialValues={this.props.admin_user}
          onSubmit={values => {
            this.props.adminChangeName(values);
          }}
        />
        <AdminChangeEmail
          initialValues={this.props.admin_user}
          onSubmit={values => {
            this.props.adminChangeEmail(values);
          }}
        />
        <AdminChangePassword
          initialValues={this.props.admin_user}
          onSubmit={values => {
            this.props.adminChangePassword(values);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { admin_user: state.users[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { adminFetchUser, adminChangeEmail, adminChangeName, adminChangePassword }
)(AdminUsersAddPage);
