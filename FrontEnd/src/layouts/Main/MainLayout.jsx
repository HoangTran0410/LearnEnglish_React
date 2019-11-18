/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { BackTop, Result, Button } from "antd";

import { withRouter } from "react-router-dom";

const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const NewLetter = React.lazy(() =>
  import("../../commons/components/Newletter")
);

function MainLayout(props) {
  const { adminRoutes, frontPageRoutes } = props;
  const { pathname } = props.location;

  if (frontPageRoutes.indexOf(pathname) >= 0) {
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

  if (adminRoutes.indexOf(pathname) >= 0) return <h1>Admin Page</h1>;

  return (
    <Result
      status="403"
      title="403"
      subTitle="Xin lỗi! Trang bạn muốn truy cập không khả dụng."
      extra={
        <Button type="primary" onClick={() => props.history.goBack()}>
          Quay lại
        </Button>
      }
    />
  );
}

export default withRouter(MainLayout);
