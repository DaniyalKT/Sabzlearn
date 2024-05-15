import React from "react";
import "./CourseDetailBox.css";

function CourseDetailBox({ icon, title, description }) {
  return (
    <div className="col-4">
      <div className="course-boxes__box">
        <div className="course-boxes__box-right">
          <i className={`course-boxes__box-right-icon ${icon}`}></i>
        </div>
        <div className="course-boxes__box-left">
          <span className="course-boxes__box-left-title">{title}</span>
          <span className="course-boxes__box-left--subtitle">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailBox;
