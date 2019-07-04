import React from "react";
import { adminAddUser } from "../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import history from "../history";

class AdminChangeName extends React.Component {
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
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className="ui form error"
      >
        <Field
          name="name"
          component={this.renderInput}
          label="Update Name"
          type="text"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return { is_signed_in: state.auth.is_signed_in };
// };

const adminChangeName = reduxForm({
  form: "adminname"
})(AdminChangeName);

export default connect(
  null,
  { adminAddUser }
)(adminChangeName);
