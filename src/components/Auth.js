import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, isSignedIn } from "../actions";
import { Link } from "react-router-dom";

class Auth extends React.Component {
  componentDidMount() {
    this.props.isSignedIn();
  }

  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.is_signed_in === null) {
      return null;
    } else if (this.props.is_signed_in) {
      return (
        <div className="ui item" onClick={this.onSignOutClick}>
          Sign Out
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <Link className="ui item" to="/signup">
            Sign Up
          </Link>
          <Link className="ui item" to="/signin">
            Sign In
          </Link>
        </React.Fragment>
      );
    }
  }

  render() {
    return <div className="right menu">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { is_signed_in: state.auth.is_signed_in };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, isSignedIn }
)(Auth);
