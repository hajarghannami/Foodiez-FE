import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import CategoryDetail from "./CategoryDetail";
import IngredientForm from "./IngredientForm";
import { useSelector } from "react-redux";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

const Routes = () => {
  const allIngredients = useSelector(
    (state) => state.categoryReducer.ingredients
  );

  return (
    <Switch>
      <Route exact path="/">
        <Link to="/categories">
          <h1> Categories</h1>
        </Link>
        <Link to="/recipes">
          <h1> Recipes </h1>
        </Link>
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
};

export default Routes;
