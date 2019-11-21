import React, { Fragment } from "react";
import { BackTop } from "antd";

const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const NewLetter = React.lazy(() => import("../../commons/HomePage/Newletter"));

function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <div style={{ margin: "130px auto 0" }}>{props.children}</div>
      <BackTop visibilityHeight={200} />
      <NewLetter />
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
