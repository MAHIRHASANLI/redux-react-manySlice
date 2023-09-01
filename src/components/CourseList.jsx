import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const courses = useSelector(({ form, courses: { searchTerm, data } }) => {
    const filteredData = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredData;
  });

  return (
    <div className="courseList">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
