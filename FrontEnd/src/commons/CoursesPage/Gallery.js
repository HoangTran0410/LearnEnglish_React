import React from 'react'

const img = require('../../assets/images/teams/team_1.jpg')

export default function Gallery() {
  return (
    <>
      {/* <!-- Gallery --> */}
      <div className="sidebar_section">
        <div className="sidebar_section_title">Instagram</div>
        <div className="sidebar_gallery">
          <ul className="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
            <li className="gallery_item">
              <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
              <a className="colorbox" href="images/gallery_1_large.jpg">
                <img src={img} alt="" />
              </a>
            </li>
            <li className="gallery_item">
              <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
              <a className="colorbox" href="images/gallery_2_large.jpg">
                <img src={img} alt="" />
              </a>
            </li>
            <li className="gallery_item">
              <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
              <a className="colorbox" href="images/gallery_3_large.jpg">
                <img src={img} alt="" />
              </a>
            </li>
            <li className="gallery_item">
              <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
              <a className="colorbox" href="images/gallery_4_large.jpg">
                <img src={img} alt="" />
              </a>
            </li>
            <li className="gallery_item">
              <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
              <a className="colorbox" href="images/gallery_5_large.jpg">
                <img src={img} alt="" />
              </a>
            </li>
            <li className="gallery_item">
              <div className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+</div>
              <a className="colorbox" href="images/gallery_6_large.jpg">
                <img src={img} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
