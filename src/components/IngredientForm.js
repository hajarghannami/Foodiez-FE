import { useState } from "react";
import { createIngredient } from "../store/actions/ingredientActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Title } from "../styles";
import Fuse from "fuse.js";

const IngredientForm = ({ categorySlug }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  // const ingredients = useSelector((state) => state.categoryReducer.ingredients);
  const { categoryId } = useParams();

  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    image: "",
  });

  const fuse = new Fuse(categories, {
    key: ["name", "ingredients.name"],
  });

  const handleChange = (event) => {
    setIngredient({
      ...ingredient,
      [event.target.name]: [event.target.value],
    });
  };

  const handleImage = (event) => {
    setIngredient({
      ...ingredient,
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createIngredient(ingredient));
    // const category = categories.find((category) => category.id === categoryId);
    // console.log(category, categoryId);
    history.push(`/categories/${categorySlug}`);
  };

  const similar = fuse.search("blueberries", 10);
  console.log(similar);
  return (
    <>
      <h1>{similar}</h1>

      <form onSubmit={handleSubmit}>
        <Title> {"New Ingredient"} </Title>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={ingredient.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {"Create"}
        </button>
      </form>
    </>
  );
};

export default IngredientForm;
