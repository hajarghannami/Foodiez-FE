// Styles
import { ListWrapper, Title } from "../styles";

import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import Loading from "./Loading";

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
    <div className="container">
      <Title>Categories</Title>
      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;
