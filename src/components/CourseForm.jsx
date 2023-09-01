import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/slices/slicesForm";
import { addData } from "../store/slices/courseSlices";

const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addData({ name, description, cost }));
  };
  return (
    <div className="formCource panel">
      <h4 className="subtitle">Add Course</h4>

      <form className="container" onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={(event) => dispatch(changeName(event.target.value))}
            />
          </div>
          <div className="field">
            <label className="label">explanation</label>
            <textarea
              className="input is-expanded"
              cols="30"
              value={description}
              onChange={(event) =>
                dispatch(changeDescription(event.target.value))
              }
            />
          </div>

          <div className="field">
            <label className="label">Price</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost}
              onChange={(event) =>
                dispatch(changeCost(parseInt(event.target.value)))
              }
            />
          </div>
        </div>
        <button className="button is-success">Success</button>
      </form>
    </div>
  );
};

export default CourseForm;
