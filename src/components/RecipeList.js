// Styles
import { ListWrapper, Title } from "../styles";

import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import Loading from "./Loading";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const loading = useSelector((state) => state.recipeReducer.loading);

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );

  const recipeList = recipes.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe.id} />
  ));
  return (
    <div className="container">
      <Title>Recipes</Title>
      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeList;
