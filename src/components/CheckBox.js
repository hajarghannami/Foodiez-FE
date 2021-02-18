import Checkbox from "@material-ui/core/Checkbox";

import { updateTask } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CheckBox = ({ taskId, status, passed }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks).find(
    (task) => task.id === taskId
  );
  const [checked, setChecked] = useState(status);

  const handleChange = (event) => {
    setChecked(!status);
    dispatch(updateTask({ ...task, status: !status }));
  };

  return (
    <div class="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={ingredient.id}
        id="flexCheckDefault"
        checked={checked}
        onChange={handleCheck}
      />
      <label className="form-check-label" for="flexCheckDefault" />
      {ingredient.name}
    </div>
  );
};

export default CheckBox;
