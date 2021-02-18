// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const IngredientItem = ({ ingredient }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: 15 + "rem" }}>
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className="card-img-top"
          style={{ height: 15 + "rem" }}
        />
        <div className="card-body">
          <p className="card-text">{ingredient.name}</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientItem;
