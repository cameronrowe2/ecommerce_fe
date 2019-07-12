import React from "react";
import { connect } from "react-redux";
import { adminFetchUsers, adminRemoveUser } from "../../actions";
import { Link } from "react-router-dom";
import requireAdminAuth from "../requireAdminAuth";

class AdminUsersPage extends React.Component {
  componentDidMount() {
    this.props.adminFetchUsers();
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="two wide column">id</div>
        <div className="five wide column">Name</div>
        <div className="five wide column">Email</div>
        <div className="two wide column" />
        <div className="two wide column" />
      </React.Fragment>
    );
  }

  renderList() {
    return this.props.users.map(user => {
      return (
        <React.Fragment key={user.id}>
          <div className="two wide column">{user.id}</div>
          <div className="five wide column">
            <Link className="ui large" to={`/adminusers/${user.id}`}>
              {user.name}
            </Link>
          </div>
          <div className="five wide column">{user.email}</div>
          <div className="two wide column">
            <div>
              <Link className="ui button" to={`/adminusers/${user.id}`}>
                Edit
              </Link>
            </div>
          </div>
          <div className="two wide column">
            <div>
              <button
                className="ui button"
                onClick={() => {
                  this.props.adminRemoveUser(user.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <Link to={`/adminusersadd`} className="ui button">
          Add User
        </Link>
        <div className="ui grid adminusers">
          {this.renderHeader()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: Object.values(state.users)
  };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { adminFetchUsers, adminRemoveUser }
  )(AdminUsersPage)
);
