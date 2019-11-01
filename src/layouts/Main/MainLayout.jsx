/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BackTop } from "antd";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <BackTop visibilityHeight={200} />
      <Footer />
    </div>
  );
}
