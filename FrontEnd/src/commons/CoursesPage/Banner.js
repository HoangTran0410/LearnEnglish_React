import React from 'react'

const img = require('../../assets/images/banner_1.jpg')

export default function Banner() {
  return (
    <>
      {/* <!-- Banner --> */}
      <div className="sidebar_section">
        <div className="sidebar_banner d-flex flex-column align-items-center justify-content-center text-center">
          <div className="sidebar_banner_background" style={{ backgroundImage: `url(${img})` }}></div>
          <div className="sidebar_banner_overlay"></div>
          <div className="sidebar_banner_content">
            <div className="banner_title">Tải liệu miễn phí</div>
            <div className="banner_button"><a href="/">tải ngay</a></div>
          </div>
        </div>
      </div>
    </>
  )
}
