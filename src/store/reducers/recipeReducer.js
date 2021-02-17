import * as types from "../actions/types";

const initialState = {
  recipes: [],
  loading: true,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case types.CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload.newRecipe],
      };
    default:
      return state;
  }
};

export default recipeReducer;
