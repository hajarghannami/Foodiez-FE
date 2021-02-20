import { useState } from "react";
import { createIngredient } from "../store/actions/ingredientActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { Title } from "../styles";
import Fuse from "fuse.js";

const IngredientForm = ({ categorySlug }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );
  const { categoryId } = useParams();
  const options = {
    shouldSort: true,
    location: 0,
    threshold: 0.8,
    keys: ["name"],
  };
  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    image: "",
  });

  const fuse = new Fuse(ingredients, {
    keys: ["name"],
  });
  let result;
  if (ingredient.name.length > 2) result = fuse.search(ingredient.name);
  let similarI = [];
  let similarC = [];
  for (const i in result) {
    similarI[i] = result[i].item.name;
    similarC[i] = categories.find((category) =>
      category.ingredients.some(
        (ingredient) => ingredient.name === result[i].item.name
      )
    );
  }
  const handleChange = (event) => {
    setIngredient({
      ...ingredient,
      [event.target.name]: event.target.value,
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
    history.push(`/categories/${categorySlug}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Title> {"New Ingredient"} </Title>
        <p>
          {similarI[0]
            ? `Are you looking for ${similarI[0]}? You can find ${
                similarI[0].endsWith("s") ? "them" : "it"
              } in following
          category: `
            : ""}
          <Link to={`/categories/${similarC[0] ? similarC[0].slug : ""}`}>
            {similarC[0] ? similarC[0].name : ""}
          </Link>
        </p>
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
