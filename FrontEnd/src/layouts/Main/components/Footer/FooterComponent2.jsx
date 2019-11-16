import React from "react";
import { Icon } from "antd";

export default function FooterComponent2() {
  return (
    <footer className="footer">
      <div
        className="footer_background"
        style={{
          backgroundImage:
            "url(" +
            require("../../../../assets/images/footer/footer_background.png") +
            ")"
        }}
      ></div>
      <div className="container">
        <div className="row footer_row">
          <div className="col">
            <div className="footer_content">
              <div className="row">
                <div className="col-lg-3 footer_col">
                  {/* <!-- Footer About --> */}
                  <div className="footer_section footer_about">
                    <div className="footer_logo_container">
                      <a href="/">
                        <div className="footer_logo_text">
                          <span>L</span>ea<span>E</span>ng
                        </div>
                      </a>
                    </div>
                    <div className="footer_about_text">
                      <p>
                        Lorem ipsum dolor sit ametium, consectetur adipiscing
                        elit.
                      </p>
                    </div>
                    <div className="footer_social">
                      <ul>
                        <li>
                          <a href="/">
                            <Icon type="facebook" theme="filled" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <Icon type="google-circle" theme="filled" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <Icon type="instagram" theme="filled" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <Icon type="twitter-circle" theme="filled" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 footer_col">
                  {/* <!-- Footer Contact --> */}
                  <div className="footer_section footer_contact">
                    <div className="footer_title">Contact Us</div>
                    <div className="footer_contact_info">
                      <ul>
                        <li>Email: Info.deercreative@gmail.com</li>
                        <li>Phone: +(88) 111 555 666</li>
                        <li>
                          40 Baria Sreet 133/2 New York City, United States
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 footer_col">
                  {/* <!-- Footer links --> */}
                  <div className="footer_section footer_links">
                    <div className="footer_title">Contact Us</div>
                    <div className="footer_links_container">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/">Features</a>
                        </li>
                        <li>
                          <a href="/courses">Courses</a>
                        </li>
                        <li>
                          <a href="/">Events</a>
                        </li>
                        <li>
                          <a href="/">Gallery</a>
                        </li>
                        <li>
                          <a href="/">FAQs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 footer_col clearfix">
                  {/* <!-- Footer links --> */}
                  <div className="footer_section footer_mobile">
                    <div className="footer_title">Mobile</div>
                    <div className="footer_mobile_content">
                      <div className="footer_image">
                        <a href="/">
                          <img
                            src={require("../../../../assets/images/footer/mobile_1.png")}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="footer_image">
                        <a href="/">
                          <img
                            src={require("../../../../assets/images/footer/mobile_2.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row copyright_row">
          <div className="col">
            <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
              <div className="cr_text">
                Copyright &copy;2019 All rights reserved | This template is made
                with <Icon type="heart" /> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
              </div>
              <div className="ml-lg-auto cr_links">
                <ul className="cr_list">
                  <li>
                    <a href="/">Copyright notification</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
