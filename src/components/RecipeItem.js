import { CategoryItemImage, ListWrapper } from "../styles";
import { Link } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";

const RecipeItem = ({ recipe }) => {
  const ingredients = recipe.ingredients.map((ingredient) => (
    <>
      <div>{ingredient.name} </div>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        style={{ height: 10 + "rem", width: 10 + "rem" }}
      />
    </>
  ));

  return (
    <div className="col">
      <div className="card" style={{ width: 18 + "rem" }}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {recipe.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{ingredients}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default RecipeItem;
