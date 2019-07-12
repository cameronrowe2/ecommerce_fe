import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requireAdminAuth from "../requireAdminAuth";
import { fetchAdminOrders } from "../../actions";

class AdminOrdersPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdminOrders();
  }

  renderHeader = () => {
    return (
      <React.Fragment>
        <div className="four wide column">id</div>
        <div className="four wide column">user id</div>
        <div className="four wide column">stripe id</div>
        <div className="four wide column">total price</div>
      </React.Fragment>
    );
  };

  renderOrders = () => {
    return this.props.orders.map(order => {
      return (
        <React.Fragment key={order.id}>
          <div className="four wide column">
            <Link to={`/adminorders/${order.id}`}>Order #{order.id}</Link>
          </div>
          <div className="four wide column">{order.user_id}</div>
          <div className="four wide column">{order.stripe_id}</div>
          <div className="four wide column">${order.total_price}</div>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Orders</h1>
        <div className="ui grid adminorders">
          {this.renderHeader()}
          {this.renderOrders()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: Object.values(state.orders)
  };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchAdminOrders }
  )(AdminOrdersPage)
);
