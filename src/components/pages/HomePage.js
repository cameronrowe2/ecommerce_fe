import React from "react";
import { connect } from "react-redux";
import { fetchDeals } from "../../actions";
import Product from "../Product";
class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchDeals();
  }

  renderList() {
    let count = 0;
    return this.props.deals.map(dealProduct => {
      count++;
      if (count < 5) {
        return <Product key={dealProduct.id} product={dealProduct} />;
      } else {
        return "";
      }
    });
  }

  render() {
    return (
      <div>
        <div className="banner-parent">
          <div className="banner">
            <div>
              <h1>Check out our products</h1>
              <button className="ui button cart">Products</button>
            </div>
          </div>
        </div>
        <h2>Deals</h2>
        <div className="ui grid">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products),
    user_id: state.auth.user_id,
    is_signed_in: state.auth.is_signed_in,
    deals: Object.values(state.deals.products)
  };
};

export default connect(
  mapStateToProps,
  { fetchDeals }
)(HomePage);
