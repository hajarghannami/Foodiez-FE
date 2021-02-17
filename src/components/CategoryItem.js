import { CategoryItemImage } from "../styles";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <CategoryItemImage src={category.image} alt={category.name} />
    </div>
  );
};

export default CategoryItem;
