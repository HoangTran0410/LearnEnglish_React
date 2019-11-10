import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="counter_background"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="counter_content">
                <h2 className="counter_title">Đăng ký ngay</h2>
                <div className="counter_text">
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dumy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                </div>

                <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
                  <div className="milestone">
                    <div className="milestone_counter" data-end-value="15">
                      15
                    </div>
                    <div className="milestone_text">năm</div>
                  </div>

                  <div className="milestone">
                    <div
                      className="milestone_counter"
                      data-end-value="120"
                      data-sign-after="k"
                    >
                      120k
                    </div>
                    <div className="milestone_text">học sinh</div>
                  </div>

                  <div className="milestone">
                    <div
                      className="milestone_counter"
                      data-end-value="670"
                      data-sign-after="+"
                    >
                      670+
                    </div>
                    <div className="milestone_text">khoá học</div>
                  </div>

                  <div className="milestone">
                    <div className="milestone_counter" data-end-value="320">
                      320+
                    </div>
                    <div className="milestone_text">giảng viên</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="counter_form">
            <div className="row fill_height">
              <div className="col fill_height">
                <form
                  className="counter_form_content d-flex flex-column align-items-center justify-content-center"
                  action="#"
                >
                  <div className="counter_form_title">Học ngay</div>
                  <input
                    type="text"
                    className="counter_input"
                    placeholder="Họ Tên:"
                    required="required"
                  />
                  <input
                    type="tel"
                    className="counter_input"
                    placeholder="Số điện thoại:"
                    required="required"
                  />
                  <select
                    name="counter_select"
                    id="counter_select"
                    defaultValue="Khoá học muốn chọn"
                    className="counter_input counter_options"
                  >
                    <option>Người bắt đầu</option>
                    <option>Giao tiếp</option>
                    <option>Chuyên ngành</option>
                  </select>
                  <textarea
                    className="counter_input counter_text_input"
                    placeholder="Lời nhắn:"
                    required="required"
                  ></textarea>
                  <button type="submit" className="counter_form_button">
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
