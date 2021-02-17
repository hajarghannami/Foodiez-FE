import "./App.css";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import { Route, Switch } from "react-router";
import CategoryDetail from "./components/CategoryDetail";
import IngredientForm from "./components/IngredientForm";

function App() {
  return (
    <Switch>
      <Route path="/categories/new">
        <CategoryForm />
      </Route>
      <Route path="/categories/:categoryId/ingredients/new">
        <IngredientForm />
      </Route>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/categories">
        <CategoryList />
      </Route>
    </Switch>
  );
}

export default App;

//react-helmet react-icons @agney/react-loading
