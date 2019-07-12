import React from "react";
import { connect } from "react-redux";
import { fetchWishlist } from "../../actions";
import { Link } from "react-router-dom";
import requireAuth from "../requireAuth";
import WishlistRow from "../WishlistRow";

class WishlistPage extends React.Component {
  componentDidMount() {
    this.props.fetchWishlist();
  }

  renderHeader = () => {
    return (
      <React.Fragment>
        <div className="four wide column">Image</div>
        <div className="four wide column">Title</div>
        <div className="four wide column">Price</div>
        <div className="four wide column" />
      </React.Fragment>
    );
  };

  renderWishlist = () => {
    console.log(this.props.wishlist);
    return this.props.wishlist.map(item => {
      return <WishlistRow key={item.product_id} item={item} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Wishlist</h1>
        <div className="ui grid">
          {this.renderHeader()}
          {this.renderWishlist()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlist: Object.values(state.wishlist)
  };
};

export default requireAuth(
  connect(
    mapStateToProps,
    { fetchWishlist }
  )(WishlistPage)
);
