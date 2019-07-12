import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, selectCategory } from "../actions";

class ProductCategories extends Component {
  renderProductCategories = () => {
    return this.props.categories.map(category => {
      return (
        <div key={category.id}>
          <label>
            <input
              name="category"
              type="radio"
              value={category.id}
              onChange={() => {}}
              onClick={e => {
                this.props.selectCategory(category.id);
                this.props.fetchProducts({
                  page_num: 0,
                  num_products: 16,
                  category_id: category.id,
                  search_term: this.props.search_term
                });
              }}
              checked={
                this.props.category_selected === category.id ? true : false
              }
            />{" "}
            {category.title}
          </label>
        </div>
      );
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>
            <input
              name="category"
              type="radio"
              value=""
              onChange={() => {}}
              onClick={e => {
                this.props.selectCategory(undefined);
                this.props.fetchProducts({
                  page_num: 0,
                  num_products: 16,
                  search_term: this.props.search_term
                });
              }}
              checked={
                this.props.category_selected === undefined ? true : false
              }
            />{" "}
            All
          </label>
        </div>
        {this.renderProductCategories()}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories.categories),
    category_selected: state.categories.selected,
    search_term: state.search
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, selectCategory }
)(ProductCategories);
