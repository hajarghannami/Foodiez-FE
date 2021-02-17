import { CategoryItemImage } from "../styles";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  return <h3>{recipe.name}</h3>;
};

export default RecipeItem;
