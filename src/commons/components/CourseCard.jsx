import React from "react";
import { Icon, Avatar } from "antd";
import { NavLink } from "react-router-dom";

const CourseCard = props => {
  const {
    image,
    title,
    teacher,
    students_count,
    overview,
    rating,
    videos_count
  } = props.data;
  return (
    <NavLink to="/courses" className="course trans_200">
      <div className="course_image">
        <img src={image} alt="" />
      </div>
      <div className="course_body">
        <h3 className="course_title">{title}</h3>
        <div className="course_teacher">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
          {teacher}
        </div>
        <div className="course_text">
          <p>{overview}</p>
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
    </NavLink>
  );
};

export default CourseCard;
