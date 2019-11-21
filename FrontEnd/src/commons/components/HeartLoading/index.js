import React from "react";
import "./style.css";

export default function HeartLoading(props) {
  const style = props.fullPage
    ? {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"
    } :
    {}
  return (
    <div style={style}>
      <div className="lds-heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
        <br />
      </div>
    </div>
  )
};
