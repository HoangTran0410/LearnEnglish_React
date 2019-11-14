/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Icon } from "antd";

const teams = [
  {
    image: require("../../assets/images/teams/team_1.jpg"),
    name: "Jacke Masito",
    jobs: "Marketing & Management"
  },
  {
    image: require("../../assets/images/teams/team_2.jpg"),
    name: "William James",
    jobs: "Designer & Website"
  },
  {
    image: require("../../assets/images/teams/team_3.jpg"),
    name: "John Tyler",
    jobs: "Quantum mechanics"
  },
  {
    image: require("../../assets/images/teams/team_4.jpg"),
    name: "Veronica Vahn",
    jobs: "Math & Physics"
  }
];

const SingleTeam = props => (
  <div className="team_item">
    <div className="team_image">
      <img src={props.data.image} alt="" />
    </div>
    <div className="team_body">
      <div className="team_title">
        <a href="#">{props.data.name}</a>
      </div>
      <div className="team_subtitle">{props.data.jobs}</div>
      <div className="social_list">
        <ul>
          <li>
            <a href="#">
              <Icon type="facebook" theme="filled" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon type="twitter-circle" theme="filled" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon type="github" theme="filled" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default function Team() {
  return (
    <div className="team">
      <div
        className="team_background parallax-window"
        // data-image-src={background}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Thành viên sáng lập</h2>
              <div className="section_subtitle">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel gravida arcu. Vestibulum feugiat, sapien ultrices
                  fermentum congue, quam velit venenatis sem
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row team_row">
          {teams.map(data => (
            <div className="col-lg-3 col-md-6 team_col" key={data.name}>
              <SingleTeam data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
