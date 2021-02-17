// Styling
import { ListWrapper } from "../styles";
// Components
import IngredientItem from "./IngredientItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
// import AddButton from "./buttons/AddButton";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const IngredientList = ({ ingredients }) => {
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.ingredientReducer.loading);

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );
  console.log(ingredients);
  const ingredientList = ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};

export default IngredientList;
