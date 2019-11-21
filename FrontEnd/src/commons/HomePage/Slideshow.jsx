import React from "react";
// import { Icon } from "antd";

const img = require("../../assets/images/slider/home_slider_1.jpg");
const img2 = require("../../assets/svg animations/ball-wed.svg");

export default function Slideshow() {
  return (
    <div className="home">
      <div className="home_slider_container">
        {/* <!-- Home Slider --> */}
        <div className=" home_slider">
          {/* <!-- Home Slider Item --> */}
          <div
            className="home_slider_background"
            style={{
              backgroundImage: `url(${img})`
            }}
          ></div>
          <div
            className="home_slider_background"
            style={{
              backgroundImage: `url(${img2})`
            }}
          ></div>
          <div className="home_slider_content">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="home_slider_title">
                    Nền tảng học tiếng anh thông minh
                  </div>
                  <div className="home_slider_subtitle">
                    Tương lai nằm trong tay bạn
                  </div>
                  <div className="home_slider_form_container">
                    <form
                      action="#"
                      id="home_search_form_1"
                      className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row align-items-center justify-content-start">
                        <input
                          type="search"
                          className="home_search_input"
                          placeholder="Từ khoá"
                          required="required"
                        />
                        <select className="dropdown_item_select home_search_input">
                          <option>Chủ đề</option>
                          <option>Chủ đề 1</option>
                          <option>Chủ đề 2</option>
                        </select>
                        <select className="dropdown_item_select home_search_input">
                          <option>Loại</option>
                          <option>Mới nhất</option>
                          <option>Nổi nhất</option>
                        </select>
                      </div>
                      <button type="submit" className="home_search_button">
                        Tìm
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Home Slider Nav --> */}
      {/* <div className="home_slider_nav home_slider_prev">
        <Icon type="left" />
      </div>
      <div className="home_slider_nav home_slider_next">
        <Icon type="right" />
      </div> */}
    </div>
  );
}
