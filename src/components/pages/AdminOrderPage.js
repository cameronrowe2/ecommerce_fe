import React from "react";
import { connect } from "react-redux";
import { fetchAdminOrder } from "../../actions";
import { Link } from "react-router-dom";
import requireAdminAuth from "../requireAdminAuth";

class AdminOrderPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdminOrder(this.props.match.params.id);
  }

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

  renderItems = order => {
    return order.order_items.map(item => {
      return (
        <React.Fragment key={item.product_id}>
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

  render() {
    let { order } = this.props;
    if (order == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Order #{order.id}</h1>
          <div className="ui grid">
            {this.renderHeader()}
            {this.renderItems(order)}
            {this.renderPrice(order.total_price)}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orders[ownProps.match.params.id]
  };
};

export default requireAdminAuth(
  connect(
    mapStateToProps,
    { fetchAdminOrder }
  )(AdminOrderPage)
);
