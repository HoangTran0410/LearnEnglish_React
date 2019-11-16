/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { BackTop } from "antd";

const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const NewLetter = React.lazy(() =>
  import("../../commons/components/Newletter")
);

export default function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <BackTop visibilityHeight={200} />
      <NewLetter />
      <Footer />
    </Fragment>
  );
}
