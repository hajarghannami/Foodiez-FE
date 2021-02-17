import { combineReducers } from "redux";
import ingredientReducer from "./ingredientReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  ingredientReducer: ingredientReducer,
  categoryReducer: categoryReducer,
});

export default rootReducer;
