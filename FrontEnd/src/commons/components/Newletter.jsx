import React from "react";

export default function Newletter() {
  return (
    // <!-- Newsletter -->

    <div className="newsletter">
      <div
        className="newsletter_background parallax-window"
        // data-parallax="scroll"
        // data-image-src="images/newsletter.jpg"
        // data-speed="0.8"
        style={{
          backgroundImage:
            "url(" + require("../../assets/images/footer/newsletter.jpg") + ")"
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">
              {/* <!-- Newsletter Content --> */}
              <div className="newsletter_content text-lg-left text-center">
                <div className="newsletter_title">
                  sign up for news and offers
                </div>
                <div className="newsletter_subtitle">
                  Subcribe to lastest smartphones news & great deals we offer
                </div>
              </div>

              {/* <!-- Newsletter Form --> */}
              <div className="newsletter_form_container ml-lg-auto">
                <form
                  action="#"
                  id="newsletter_form"
                  className="newsletter_form d-flex flex-row align-items-center justify-content-center"
                >
                  <input
                    type="email"
                    className="newsletter_input"
                    placeholder="Your Email"
                    required="required"
                  />
                  <button type="submit" className="newsletter_button">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
