import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

// const testBackend = () => {};

const CourseCard = props => {
  const {
    ID,
    Picture,
    Title,
    TopicID,
    Description,
    students_count = 0,
    rating = 0,
    videos_count = 0
  } = props.data;

  return (
    <Link to={"/course?ID=" + ID} className="course trans_200">
      <div className="course_image">
        <img src={Picture} alt="" />
      </div>
      <div className="course_body">
        <h3 className="course_title">{Title}</h3>
        <div className="course_topic">
          <Icon type="tag" />
          {" " + TopicID}
        </div>
        <div className="course_text">
          <p>{Description}</p>
        </div>
      </div>
      <div className="course_footer">
        <div className="course_footer_content d-flex flex-row align-items-center justify-content-between">
          <div className="course_info">
            <Icon type="user" />
            <span> {students_count} học viên</span>
          </div>
          <div className="course_info">
            <Icon type="star" theme="filled" />
            <span> {rating} sao</span>
          </div>
          <div className="course_info">
            <Icon type="play-square" theme="filled" />
            <span> {videos_count} video</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
