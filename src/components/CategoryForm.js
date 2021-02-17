import { useState } from "react";
import { createCategory } from "../store/actions/categoryActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Title } from "../styles";

const CategoryForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setCategory({
      ...category,
      [event.target.name]: [event.target.value],
    });
  };

  const handleImage = (event) => {
    setCategory({
      ...category,
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCategory(category));
    history.push("/categories");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title> {"New Category"} </Title>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={category.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Image</label>
        <input
          type="file"
          className="form-control"
          name="image"
          onChange={handleImage}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {"Create"}
      </button>
    </form>
  );
};

export default CategoryForm;
