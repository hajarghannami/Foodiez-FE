import "./App.css";
import CategoryList from "./components/CategoryList";
import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <Route path="/categories">
        <CategoryList />
      </Route>
    </Switch>
  );
}

export default App;
