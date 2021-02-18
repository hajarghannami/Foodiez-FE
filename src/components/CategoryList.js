// Styles
import { ListWrapper, Title } from "../styles";
import { BsPlusSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.ingredientReducer.loading);

  if (loading)
    return (
      <ListWrapper>
        <Loading />
      </ListWrapper>
    );

  const categoryList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));
  return (
    <>
      <div className="container">
        <Link to={`/categories/new`}>
          <BsPlusSquare />
        </Link>
        <Title>Categories</Title>

        <div className="row">{categoryList}</div>
      </div>
    </>
  );
};

export default CategoryList;
