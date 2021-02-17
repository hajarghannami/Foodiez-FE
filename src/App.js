import "./App.css";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import CategoryDetail from "./components/CategoryDetail";
import IngredientForm from "./components/IngredientForm";
import { useSelector } from "react-redux";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";

function App() {
  const allIngredients = useSelector(
    (state) => state.categoryReducer.ingredients
  );

  return (
    <Switch>
      <Route exact path="/">
        <Link to="/categories"> Categories </Link>
        <Link to="/recipes"> Recipes </Link>
      </Route>
      <Route path="/categories/new">
        <CategoryForm />
      </Route>
      <Route path="/categories/:categoryId/ingredients/new">
        <IngredientForm />
      </Route>
      <Route path="/categories/:categorySlug">
        <CategoryDetail allIngredients={allIngredients} />
      </Route>
      <Route path="/categories">
        <CategoryList />
      </Route>
      <Route path="/recipes/new">
        <RecipeForm />
      </Route>
      <Route path="/recipes">
        <RecipeList />
      </Route>
    </Switch>
  );
}

export default App;

//react-helmet react-icons @agney/react-loading
