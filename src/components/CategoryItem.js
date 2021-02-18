import { CategoryItemImage } from "../styles";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: 18 + "rem" }}>
        <Link to={`/categories/${category.slug}`}>
          <img
            src={category.image}
            alt={category.name}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <p className="card-text">{category.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
