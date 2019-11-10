/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CourseCard from "./CourseCard";
import { courses } from "../../utils/fakedata";

export default class PopularCourses extends Component {
  render() {
    return (
      <div className="hit_courses">
        <div className="section_background parallax-window"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <h2 className="section_title">Khoá học nổi bật</h2>
                <div className="section_subtitle">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices
                    fermentum congue, quam velit venenatis sem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row courses_row">
            {courses.map(course => (
              <div className="col-lg-4 course_col" key={course.title}>
                <CourseCard data={course} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col">
              <div className="courses_button trans_200">
                <a href="#">view all courses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
