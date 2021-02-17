import * as types from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case types.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload.newCategory],
      };
    default:
      return state;
  }
};

export default categoryReducer;
