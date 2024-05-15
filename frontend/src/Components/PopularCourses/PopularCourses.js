import React from "react";
import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

function PopularCourses() {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجوها"
        />
      </div>
    </div>
  );
}

export default PopularCourses;
