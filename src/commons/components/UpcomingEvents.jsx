/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

const events = [
  {
    image: require("../../assets/images/events/event_1.jpg"),
    title: "Which Country Handles Student Debt?",
    day: 21,
    month: "Aug",
    time: "15.00 - 19.30",
    position: "25 New York City",
    overview:
      "Policy analysts generally agree on a need for reform, but not on which path..."
  },
  {
    image: require("../../assets/images/events/event_2.jpg"),
    title: "Repaying your student loans (Winter 2017-2018)",
    day: 27,
    month: "Aug",
    time: "09.00 - 17.30",
    position: "25 Brooklyn City",
    overview:
      "PThis Consumer Action News issue covers topics now being debated before..."
  },
  {
    image: require("../../assets/images/events/event_3.jpg"),
    title: "Alternative data and financial inclusion",
    day: 1,
    month: "Sep",
    time: "13.00 - 18.30",
    position: "25 New York City",
    overview:
      "Policy analysts generally agree on a need for reform, but not on which path..."
  }
];

const Event = props => (
  <div className="event event_left">
    <div className="event_image">
      <img src={props.data.image} alt="" />
    </div>
    <div className="event_body d-flex flex-row align-items-start justify-content-start">
      <div className="event_date">
        <div className="d-flex flex-column align-items-center justify-content-center trans_200">
          <div className="event_day trans_200">{props.data.day}</div>
          <div className="event_month trans_200">{props.data.month}</div>
        </div>
      </div>
      <div className="event_content">
        <div className="event_title">
          <a href="#">{props.data.title}</a>
        </div>
        <div className="event_info_container">
          <div className="event_info">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <span>{props.data.time}</span>
          </div>
          <div className="event_info">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>{props.data.position}</span>
          </div>
          <div className="event_text">
            <p>{props.data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default class UpcomingEvents extends Component {
  render() {
    return (
      <div className="events">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <h2 className="section_title">Sự kiện sắp tới</h2>
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
          <div className="row events_row">
            {events.map(event => (
              <div className="col-lg-4 event_col" key={event.title}>
                <Event data={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
