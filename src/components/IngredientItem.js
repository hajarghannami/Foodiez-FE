// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const IngredientItem = ({ ingredient }) => {
  return (
    <ProductWrapper>
      {/* <Link to={`/ingredients/${ingredient.slug}`}> */}
      <img alt={ingredient.name} src={ingredient.image} />
      {/* </Link> */}
      <p>{ingredient.name}</p>
    </ProductWrapper>
  );
};

export default IngredientItem;
