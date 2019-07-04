import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (this.props.is_signed_in) {
        history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { is_signed_in: state.auth.is_signed_in };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
