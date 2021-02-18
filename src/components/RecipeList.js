// Styles
import { ListWrapper, Title } from "../styles";

import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import Loading from "./Loading";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const RecipeList = () => {
  const [query, setQuery] = useState("");
  // const [allergies, setAllergies] = useState([]);
  let recipes = useSelector((state) => state.recipeReducer.recipes);
  const loading = useSelector((state) => state.recipeReducer.loading);
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );

  // const handleClick = (event) => {
  //   allergies.includes(event.target.name)
  //     ? setAllergies([
  //         ...allergies.filter((allergy) => allergy.name !== event.target.value),
  //       ])
  //     : setAllergies([...allergies, event.target.value]);
  // };

  // const ingredientList = ingredients.map((ingredient) => (
  //   <button
  //     type="button"
  //     style={{ fontSize: 0.8 + "rem" }}
  //     class="btn btn-primary"
  //     value={ingredient.name}
  //     onClick={handleClick}
  //   >
  //     {ingredient.name}
  //   </button>
  // ));

  // if (allergies.length) {
  //   recipes = allergies.map((allergy) =>
  //     recipes.filter((recipe) =>
  //       recipe.ingredients.find(
  //         (ingredient) => !ingredient.name.includes(allergy)
  //       )
  //     )
  //   );
  // }
  console.log(recipes);
  const recipeList = recipes
    .filter((recipe) =>
      recipe.ingredients.find((ingredient) =>
        ingredient.name.toLowerCase().includes(query.toLowerCase())
      )
    )
    .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);

  return (
    <div className="container">
      <Title>Recipes</Title>
      {/* Allergies? {ingredientList} */}
      <SearchBar setQuery={setQuery} />
      <div className="row">{recipeList}</div>
      <Link to={`/recipes/new`}>
        <BsPlusSquare />
      </Link>
    </div>
  );
};

export default RecipeList;
