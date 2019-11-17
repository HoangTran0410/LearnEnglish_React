import React from "react";
// import { Icon } from "antd";

import "./style.css";

export default function LoadingComponent(props) {
  // return (
  //   <div
  //     style={{
  //       width: "100vw",
  //       height: "100vh",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       flexDirection: "column"
  //     }}
  //   >
  //     <Icon type="loading" style={{ fontSize: 50, color: "#14bdee" }} />
  //     <p>{props.text || "Đang tải ..."}</p>
  //   </div>
  // );
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"
      }}
    >
      <div className="lds-heart">
        <div></div>
      </div>
      <span style={{ color: "white" }}>{props.text || "Đang tải"}</span>
    </div>
  );
}
