import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { fetchCategories } from "./actions/categoryActions";
import { fetchIngredients } from "./actions/ingredientActions";
import { fetchRecipes } from "./actions/recipeActions";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCategories());
store.dispatch(fetchIngredients());
store.dispatch(fetchRecipes());

export default store;
