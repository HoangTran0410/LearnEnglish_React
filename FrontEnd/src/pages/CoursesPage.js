/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Pagination, Icon } from 'antd';
import { Link } from 'react-router-dom'

import CourseCard from '../commons/components/CourseCard';
import { courses, categories } from '../utils/fakedata';

export default class HomePage extends Component {

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  render() {
    return (
      <div className="courses">
        <div className="container">
          <div className="row">

            <div className="col-lg-8">
              <div className="courses_search_container">
                {/* <form action="#" id="courses_search_form" className="courses_search_form d-flex flex-row align-items-center justify-content-start">
                  <input type="search" className="courses_search_input" placeholder="Search Courses" required="required" />
                  <select id="courses_search_select" className="courses_search_select courses_search_input">
                    <option>All Categories</option>
                    <option>Category</option>
                    <option>Category</option>
                    <option>Category</option>
                  </select>
                  <button action="submit" className="courses_search_button ml-auto">search now</button>
                </form> */}
              </div>
              <div className="courses_container">
                <div className="row courses_row">
                  {courses.map((course, index) => (
                    <div className="col-lg-6 course_col" key={"courses-card-" + index}>
                      <CourseCard data={course} />
                    </div>
                  ))}
                </div>
                <div className="row pagination_row">
                  <div className="col">
                    <div className="pagination_container d-flex flex-row align-items-center justify-content-start">
                      <Pagination
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange}
                        defaultCurrent={3}
                        total={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Courses Sidebar --> */}
            <div className="col-lg-4">
              <div className="sidebar">

                {/* <!-- Categories --> */}
                <div className="sidebar_section">
                  <div className="sidebar_section_title">Categories</div>
                  <div className="sidebar_categories">
                    <ul>
                      {
                        categories.map(cate => (
                          <li key={cate}>
                            <Link to="/">
                              <Icon type="arrow-right" /> {cate}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>

                {/* <!-- Latest Course --> */}
                <div className="sidebar_section">
                  <div className="sidebar_section_title">Latest Courses</div>
                  <div className="sidebar_latest">

                    {/* <!-- Latest Course --> */}
                    <div className="latest d-flex flex-row align-items-start justify-content-start">
                      <div className="latest_image"><div><img src="images/latest_1.jpg" alt="" /></div></div>
                      <div className="latest_content">
                        <div className="latest_title"><a href="course.html">How to Design a Logo a Beginners Course</a></div>
                        <div className="latest_price">Free</div>
                      </div>
                    </div>

                    {/* <!-- Latest Course --> */}
                    <div className="latest d-flex flex-row align-items-start justify-content-start">
                      <div className="latest_image"><div><img src="images/latest_2.jpg" alt="" /></div></div>
                      <div className="latest_content">
                        <div className="latest_title"><a href="course.html">Photography for Beginners Masterclass</a></div>
                        <div className="latest_price">$170</div>
                      </div>
                    </div>

                    {/* <!-- Latest Course --> */}
                    <div className="latest d-flex flex-row align-items-start justify-content-start">
                      <div className="latest_image"><div><img src="images/latest_3.jpg" alt="" /></div></div>
                      <div className="latest_content">
                        <div className="latest_title"><a href="course.html">The Secrets of Body Language</a></div>
                        <div className="latest_price">$220</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* <!-- Gallery --> */}
                <div className="sidebar_section">
                  <div className="sidebar_section_title">Instagram</div>
                  <div className="sidebar_gallery">
                    <ul className="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
                      <li className="gallery_item">
                        <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                        <a className="colorbox" href="images/gallery_1_large.jpg">
                          <img src="images/gallery_1.jpg" alt="" />
                        </a>
                      </li>
                      <li className="gallery_item">
                        <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                        <a className="colorbox" href="images/gallery_2_large.jpg">
                          <img src="images/gallery_2.jpg" alt="" />
                        </a>
                      </li>
                      <li className="gallery_item">
                        <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                        <a className="colorbox" href="images/gallery_3_large.jpg">
                          <img src="images/gallery_3.jpg" alt="" />
                        </a>
                      </li>
                      <li className="gallery_item">
                        <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                        <a className="colorbox" href="images/gallery_4_large.jpg">
                          <img src="images/gallery_4.jpg" alt="" />
                        </a>
                      </li>
                      <li className="gallery_item">
                        <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                        <a className="colorbox" href="images/gallery_5_large.jpg">
                          <img src="images/gallery_5.jpg" alt="" />
                        </a>
                      </li>
                      <li className="gallery_item">
                        <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
                        <a className="colorbox" href="images/gallery_6_large.jpg">
                          <img src="images/gallery_6.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Tags --> */}
                <div className="sidebar_section">
                  <div className="sidebar_section_title">Tags</div>
                  <div className="sidebar_tags">
                    <ul className="tags_list">
                      <li><a href="#">creative</a></li>
                      <li><a href="#">unique</a></li>
                      <li><a href="#">photography</a></li>
                      <li><a href="#">ideas</a></li>
                      <li><a href="#">wordpress</a></li>
                      <li><a href="#">startup</a></li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Banner --> */}
                <div className="sidebar_section">
                  <div className="sidebar_banner d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="sidebar_banner_background"></div>
                    <div className="sidebar_banner_overlay"></div>
                    <div className="sidebar_banner_content">
                      <div className="banner_title">Free Book</div>
                      <div className="banner_button"><a href="#">download now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}