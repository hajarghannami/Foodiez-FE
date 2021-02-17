import { combineReducers } from "redux";
import ingredientReducer from "./ingredientReducer";
import categoryReducer from "./categoryReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  ingredientReducer: ingredientReducer,
  categoryReducer: categoryReducer,
  recipeReducer: recipeReducer,
});

export default rootReducer;
