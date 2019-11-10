import React from "react";

const fetures_data = [
  {
    image: require("../../assets/images/features/icon_1.png"),
    title: "Chuyên Nghiệp",
    text: "Đội ngũ chuyên nghiệp, sẵn sàng hỗ trợ bạn bất cứ lúc nào."
  },
  {
    image: require("../../assets/images/features/icon_2.png"),
    title: "Tài liệu & Giáo trình",
    text: "Lượng tài liệu và khoá học dồi dào, đủ mọi chủ đề dành cho bạn."
  },
  {
    image: require("../../assets/images/features/icon_3.png"),
    title: "Khoá học Online",
    text: "Mô hình học online mới lạ, hiệu quả, mọi lúc, mọi nơi."
  },
  {
    image: require("../../assets/images/features/icon_4.png"),
    title: "Giải thưởng",
    text:
      "Những cuộc thi online được diễn ra thường xuyên với phần thưởng hấp dẫn."
  }
];

const Feature = props => (
  <div className="col-lg-3 feature_col">
    <div className="feature text-center trans_400">
      <div className="feature_icon">
        <img src={props.data.image} alt="" />
      </div>
      <h3 className="feature_title">{props.data.title}</h3>
      <div className="feature_text">
        <p>{props.data.text}</p>
      </div>
    </div>
  </div>
);

export default function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Chào mừng tới LeaEng</h2>
              <div className="section_subtitle">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum a modi consequatur quia quibusdam. Iusto culpa maxime
                  blanditiis molestias nesciunt non excepturi veniam vitae,
                  aspernatur dolore natus libero earum illo?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row features_row">
          {fetures_data.map(feature => (
            <Feature data={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
