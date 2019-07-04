import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../actions";
import { Link } from "react-router-dom";
import requireAuth from "../requireAuth";

class OrdersPage extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  test = () => {
    console.log("test");
  };

  renderHeader = () => {
    return (
      <React.Fragment>
        <div className="four wide column">Product</div>
        <div className="four wide column">Product Price</div>
        <div className="four wide column">Quantity</div>
        <div className="four wide column">Price</div>
      </React.Fragment>
    );
  };

  renderPrice = total_price => {
    return (
      <React.Fragment>
        <div className="four wide column">Total Price</div>
        <div className="four wide column" />
        <div className="four wide column" />
        <div className="four wide column">${total_price}</div>
      </React.Fragment>
    );
  };

  renderOrders = () => {
    console.log(this.props.orders);
    return this.props.orders.map(order => {
      const items = order.order_items.map(item => {
        const key = `${order.id}-${item.product_id}`;
        return (
          <React.Fragment key={key}>
            <div className="four wide column">
              <Link to={`/products/${item.product_id}`}>
                {item.product_title}
              </Link>
            </div>
            <div className="four wide column">${item.product_price}</div>
            <div className="four wide column">{item.quantity}</div>
            <div className="four wide column">
              ${item.quantity * item.product_price}
            </div>
          </React.Fragment>
        );
      });
      return (
        <div key={order.id}>
          <h3>
            <Link to={`/orders/${order.id}`}>Order #{order.id}</Link>
          </h3>
          <div className="ui grid">
            {this.renderHeader()}
            {items}
            {this.renderPrice(order.total_price)}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Orders</h1>
        {this.renderOrders()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: Object.values(state.orders),
    is_signed_in: state.auth.is_signed_in
  };
};

export default requireAuth(
  connect(
    mapStateToProps,
    { fetchOrders }
  )(OrdersPage)
);
