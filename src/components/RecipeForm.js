import { useState } from "react";
import { createRecipe } from "../store/actions/recipeActions";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Title } from "../styles";
import IngredientItem from "./IngredientItem";

const RecipeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const _ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const [recipe, setRecipe] = useState({
    name: "",
  });

  const [ingredients, setIngredients] = useState([]);

  const handleChange = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    setIngredients([...ingredients, +event.target.value]);
  };

  const ingredientList = _ingredients.map((ingredient) => (
    <button
      type="button"
      key={ingredient.id}
      value={ingredient.id}
      onClick={handleClick}
    >
      {ingredient.name}
    </button>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRecipe([recipe, ingredients]));
    history.push("/recipes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Title> {"New Recipe"} </Title>
        {ingredientList}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {"Create"}
        </button>
      </form>
    </>
  );
};

export default RecipeForm;

//create recipe with default value after clicking one image and receive the id
//collect all ingredient Ids
// use Recipe_Ingredients to give new id and ingredient ids
// change recipe name from default value
