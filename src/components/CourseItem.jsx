import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../store/slices/courseSlices";

const CourseItem = ({ course }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteData(course.id));
  };
  return (
    <div className="courseItem">
      <h1>{course.name}</h1>
      <h2>{course.description}</h2>
      <h2>{course.cost}</h2>
      <button className="button is-danger" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

export default CourseItem;
