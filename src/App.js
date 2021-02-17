import logo from "./logo.svg";
import "./App.css";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/categories">
        <CategoryList />
      </Route>
    </Switch>
  );
}

export default App;
