import React from "react";
import { connect } from "react-redux";
import {} from "../../actions";
import requireAdminAuth from "../requireAdminAuth";

class AdminPage extends React.Component {
  componentDidMount() {}

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

export default requireAdminAuth(
  connect(
    null,
    null
  )(AdminPage)
);
