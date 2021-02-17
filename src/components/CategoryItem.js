import { CategoryItemImage } from "../styles";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <h3>{category.name}</h3>
      <CategoryItemImage src={category.image} alt={category.name} />
    </div>
  );
};

export default CategoryItem;
