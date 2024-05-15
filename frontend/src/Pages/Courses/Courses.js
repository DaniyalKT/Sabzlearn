import React from "react";
import "./Courses.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Pagination from "../../Components/Pagination/Pagination";
import CourseBox from "../../Components/CourseBox/CourseBox";

export default function Courses() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        Links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
                <CourseBox
                  courseTitle="آموزش پایتون"
                  coursePrice="1000000"
                  courseTeacher="رضا دولتی"
                  courseUserCount="500"
                />
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </section>

      <Footer />
    </>
  );
}
