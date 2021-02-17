import { DetailWrapper, ListWrapper } from "../styles";
import { Link, Redirect, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { BsPlusSquare } from "react-icons/bs";
// import AddButton from "./buttons/AddButton";
import IngredientList from "./IngredientList";
import Loading from "./Loading";

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const loading = useSelector((state) => state.categoryReducer.loading);

  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    )
  );

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );

  console.log(categorySlug);
  const ingredients = category.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );

  return !category ? (
    <Redirect to="/categories" />
  ) : (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{category.name}</title>
          <meta name="description" content={category.name} />
        </Helmet>
        <h1>{category.name}</h1>
        <img src={category.image} alt={category.name} />
      </DetailWrapper>
      <IngredientList ingredients={ingredients} />
      <Link to={`/categories/${category.id}/ingredients/new`}>
        Add new Ingredient
      </Link>
    </>
  );
};

export default CategoryDetail;
