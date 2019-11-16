import React from "react";
import { Icon } from "antd";

export default function LoadingComponent(props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Icon type="loading" style={{ fontSize: 50, color: "#14bdee" }} />
      <p>{props.text || "Đang tải ..."}</p>
    </div>
  );
}
