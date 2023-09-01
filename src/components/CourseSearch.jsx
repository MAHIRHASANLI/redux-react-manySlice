import React from "react";
import { changeSearchTerm } from "../store/slices/courseSlices";
import { useDispatch, useSelector } from "react-redux";

const CourseSearch = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.courses.searchTerm);

  return (
    <div>
      <div className="courseSearch field is-horizontal container">
        <h1 className="subtitle">Courses</h1>
        <div>
          <label>Search: </label>
          <input
            className="input"
            value={inputValue}
            onChange={(event) => dispatch(changeSearchTerm(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
