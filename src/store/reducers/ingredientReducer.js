import * as types from "../actions/types";

const initialState = {
  ingredients: [],
  loading: true,
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      };

    case types.CREATE_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload.newIngredient],
      };

    default:
      return state;
  }
};

export default ingredientReducer;
