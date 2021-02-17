// Styles
import { ListWrapper, Title } from "../styles";

import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);

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
