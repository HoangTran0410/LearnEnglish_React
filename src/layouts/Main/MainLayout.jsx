/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { BackTop } from "antd";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <BackTop visibilityHeight={200} />
      <Footer />
    </Fragment>
  );
}
