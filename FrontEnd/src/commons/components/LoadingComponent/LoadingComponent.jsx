import React from "react";
import "./style.css";

export default function LoadingComponent(props) {
  return (
    <div className="lds-heart-container">
      <div className="lds-heart">
        <div></div>
      </div>
      <br />
    </div>
  );
}
