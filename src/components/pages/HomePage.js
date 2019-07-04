import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, fetchProducts } from "../../actions";
import endpoint from "../../apis/endpoint";

class HomePage extends React.Component {
  componentDidMount() {}

  test = async () => {
    var testData = await endpoint.get("/");
    console.log(testData);
  };

  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={this.test}>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products),
    user_id: state.auth.user_id,
    is_signed_in: state.auth.is_signed_in
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, fetchProducts }
)(HomePage);
