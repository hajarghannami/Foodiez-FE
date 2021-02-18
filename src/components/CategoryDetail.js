import { DetailWrapper, ListWrapper, Title } from "../styles";
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

  // const allIngredients = useSelector(
  //   (state) => state.ingredientReducer.ingredients
  // );

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

  console.log(category.ingredients);
  // const ingredients = category.ingredients.map((ingredient) =>
  //   allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  // );

  return !category ? (
    <Redirect to="/categories" />
  ) : (
    <>
      <Helmet>
        <title>{category.name}</title>
        <meta name="description" content={category.name} />
      </Helmet>
      <h1>{category.name}</h1>
      <div className="container">
        <Link to={`/categories/${category.id}/ingredients/new`}>
          <BsPlusSquare />
        </Link>
        <IngredientList categoryId={category.id} />
      </div>
    </>
  );
};

export default CategoryDetail;
