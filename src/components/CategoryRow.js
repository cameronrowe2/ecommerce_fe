import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { adminRemoveCategory } from "../actions";

class CategoryRow extends React.Component {
  renderEditButton(category_id) {
    return (
      <div>
        <Link className="ui button" to={`/admincategoriesedit/${category_id}`}>
          Edit
        </Link>
      </div>
    );
  }

  renderDeleteButton(category_id) {
    return (
      <div>
        <button
          className="ui button"
          onClick={() => {
            this.props.adminRemoveCategory(category_id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="one wide column">{this.props.category.id}</div>
        <div className="eleven wide column">
          <Link to={`/admincategoriesedit/${this.props.category.id}`}>
            {this.props.category.title}
          </Link>
        </div>
        <div className="two wide column">
          {this.renderEditButton(this.props.category.id)}
        </div>
        <div className="two wide column">
          {this.renderDeleteButton(this.props.category.id)}
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     is_signed_in: state.auth.is_signed_in,
//     order: state.orders[ownProps.match.params.id]
//   };
// };

export default connect(
  null,
  { adminRemoveCategory }
)(CategoryRow);
