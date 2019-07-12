import React from "react";
import { connect } from "react-redux";
import { verifyEmail } from "../../actions";
import requireAdminAuth from "../requireAdminAuth";

class VerifyEmailPage extends React.Component {
  componentDidMount() {
    this.props.verifyEmail(this.props.match.params.email_hash);
  }

  render() {
    return (
      <div>
        <div>Admin</div>
        <button
          onClick={() => {
            console.log("test");
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     products: Object.values(state.products),
//     user_id: state.auth.user_id,
//     is_signed_in: state.auth.is_signed_in
//   };
// };

export default connect(
  null,
  { verifyEmail }
)(VerifyEmailPage);
