import React from "react";

export default function Newletter() {
  return (
    // <!-- Newsletter -->

    <div class="newsletter">
      <div
        class="newsletter_background parallax-window"
        // data-parallax="scroll"
        // data-image-src="images/newsletter.jpg"
        // data-speed="0.8"
        style={{
          backgroundImage:
            "url(" + require("../../assets/images/footer/newsletter.jpg") + ")"
        }}
      ></div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">
              {/* <!-- Newsletter Content --> */}
              <div class="newsletter_content text-lg-left text-center">
                <div class="newsletter_title">sign up for news and offers</div>
                <div class="newsletter_subtitle">
                  Subcribe to lastest smartphones news & great deals we offer
                </div>
              </div>

              {/* <!-- Newsletter Form --> */}
              <div class="newsletter_form_container ml-lg-auto">
                <form
                  action="#"
                  id="newsletter_form"
                  class="newsletter_form d-flex flex-row align-items-center justify-content-center"
                >
                  <input
                    type="email"
                    class="newsletter_input"
                    placeholder="Your Email"
                    required="required"
                  />
                  <button type="submit" class="newsletter_button">
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
