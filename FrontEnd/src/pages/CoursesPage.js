/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

const PopularTopics = React.lazy(() => import('../commons/CoursesPage/PopularTopics'));
const LatestCourses = React.lazy(() => import('../commons/CoursesPage/LatestCourses'));
const CoursesList = React.lazy(() => import('../commons/CoursesPage/CoursesList'));
const Gallery = React.lazy(() => import('../commons/CoursesPage/Gallery'));
const Banner = React.lazy(() => import('../commons/CoursesPage/Banner'));

export default class CoursesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latest_courses: [],
    }
  }

  render() {
    return (
      <div className="courses">
        <div className="container">
          <div className="row">

            {/* Courses List */}
            <div className="col-lg-8">
              <CoursesList />
            </div>

            {/* <!-- Courses Sidebar --> */}
            <div className="col-lg-4">
              <div className="sidebar">

                <PopularTopics />

                <LatestCourses />

                <Gallery />

                <Banner />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}