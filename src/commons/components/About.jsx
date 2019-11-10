/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const about_data = [
  {
    image: require("../../assets/images/about/about_1.jpg"),
    title: "Câu chuyện",
    text:
      "Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg."
  },
  {
    image: require("../../assets/images/about/about_2.jpg"),
    title: "Nhiệm vụ",
    text:
      "Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg."
  },
  {
    image: require("../../assets/images/about/about_3.jpg"),
    title: "Tầm nhìn",
    text:
      "Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg."
  }
];

const SingleAbout = props => (
  <div className="about_item">
    <div className="about_item_image">
      <img src={props.data.image} alt="" />
    </div>
    <div className="about_item_title">
      <p>{props.data.title}</p>
    </div>
    <div className="about_item_text">
      <p>{props.data.text}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Giới thiệu</h2>
              <div className="section_subtitle">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel gravida arcu Vestibulum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row about_row">
          {about_data.map(about => (
            <div
              className="col-lg-4 about_col about_col_left"
              key={about.title}
            >
              <SingleAbout data={about} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
