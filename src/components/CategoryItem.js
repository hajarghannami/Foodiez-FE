import { CategoryItemImage } from "../styles";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <>
      <h3>{category.name}</h3>
      <Link to={`/categories/${category.slug}`}>
        <CategoryItemImage src={category.image} alt={category.name} />
      </Link>
    </>
  );
};

export default CategoryItem;
