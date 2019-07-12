import _ from "lodash";
import {
  FETCH_CATEGORIES,
  CATEGORIES_SELECT,
  ADMIN_REMOVE_CATEGORY,
  ADMIN_ADD_CATEGORY,
  FETCH_CATEGORY,
  ADMIN_EDIT_CATEGORY
} from "../actions/types";

const INITIAL_STATE = { categories: {}, selected: undefined };

export default (state = INITIAL_STATE, action) => {
  let categories;
  switch (action.type) {
    case FETCH_CATEGORIES:
      categories = { ..._.mapKeys(action.payload.data, "id") };
      return { ...state, categories };
    case CATEGORIES_SELECT:
      return { ...state, selected: action.payload };
    case ADMIN_REMOVE_CATEGORY:
      categories = _.omit(state.categories, action.payload.data.category_id);
      return { ...state, categories };
    case ADMIN_ADD_CATEGORY:
    case FETCH_CATEGORY:
    case ADMIN_EDIT_CATEGORY:
      categories = {
        ...state.categories,
        [action.payload.data.id]: action.payload.data
      };
      return { ...state, categories };
    default:
      return state;
  }
};
