import React from "react";
import { connect } from "react-redux";
import {} from "../../actions";
import requireAdminAuth from "../requireAdminAuth";
import { Link } from "react-router-dom";

class AdminPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="ui grid">
          <Link className="eight wide column large-button" to="/adminproducts">
            <div>Products</div>
          </Link>
          <Link className="eight wide column large-button" to="/adminusers">
            <div>Users</div>
          </Link>
          <Link className="eight wide column large-button" to="/adminorders">
            <div>Orders</div>
          </Link>
          <Link
            className="eight wide column large-button"
            to="/admincategories"
          >
            <div>Categories</div>
          </Link>
        </div>
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
