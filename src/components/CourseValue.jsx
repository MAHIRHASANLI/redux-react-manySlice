import React from "react";
import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalPrice = useSelector(({ form, courses: { searchTerm, data } }) => {
    let total = 0;
    // data.filter((course) =>total += course.cost);
    const filteredData = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    for (let course of filteredData) {
      total += course.cost;
    }
    return total;
  });
  return (
    <div className="courseValue">
      <p className="title">Total price: {totalPrice}</p>
    </div>
  );
};

export default CourseValue;
