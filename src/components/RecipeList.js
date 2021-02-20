// Styles
import { ListWrapper, Title } from "../styles";

import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import Loading from "./Loading";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";

const RecipeList = () => {
  const [allergies, setAllergies] = useState([]);
  const [options, setOptions] = useState(null);
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

  const _options = ingredients.map((ingredient) => {
    return { value: ingredient.name, label: ingredient.name };
  });

  const handleClick = (event) => {
    allergies.includes(event.target.value)
      ? setAllergies([
          ...allergies.filter((allergy) => allergy !== event.target.value),
        ])
      : setAllergies([...allergies, event.target.value]);
  };

  const ingredientList = ingredients.map((ingredient) => (
    <button
      type="button"
      style={{ fontSize: 0.8 + "rem" }}
      className={`btn btn-${
        allergies.some((allergy) => allergy == ingredient.name)
          ? "danger"
          : "success"
      }`}
      value={ingredient.name}
      onClick={handleClick}
    >
      {ingredient.name}
    </button>
  ));

  for (const allergy of allergies) {
    recipes = recipes.filter(
      (recipe) =>
        !recipe.ingredients.find((ingredient) => ingredient.name === allergy)
    );
  }
  if (options) {
    for (const option of options) {
      recipes = recipes.filter((recipe) =>
        recipe.ingredients.find(
          (ingredient) => ingredient.name === option.value
        )
      );
    }
  }
  const handleChange = (selectedOption) => {
    setOptions(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const recipeList = recipes.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe.id} />
  ));

  return (
    <>
      <div className="container">
        <Title>Recipes</Title>
        Allergies? {ingredientList}
        <Select
          isMulti={true}
          value={options}
          onChange={handleChange}
          options={_options}
        />
        <div className="row">{recipeList}</div>
        <Link to={`/recipes/new`}>
          <BsPlusSquare />
        </Link>
      </div>
    </>
  );
};

export default RecipeList;
