import React from 'react';
import { Result, Button, Icon } from 'antd';
import {
  Link,
  withRouter
} from "react-router-dom";

const GoBackButton = withRouter((props) => {
  return (
    <div>
      <Button type="primary" onClick={() => props.history.goBack()}>
        <Icon type="arrow-left" />Quay lại
      </Button>
      <br /><br />
      <Button type="primary">
        <Link to="/">Về trang chủ</Link>
      </Button>
    </div>
  )
})

export default function ErrorPage(props) {
  const { type = "404" } = props

  switch (type) {
    case "404":
      return (
        <Result
          status="404"
          title="404"
          subTitle="Xin lỗi! Trang bạn muốn truy cập không khả dụng."
          extra={
            <GoBackButton />
          }
        />
      )

    case "403":
      return (
        <Result
          status="403"
          title="403"
          subTitle="Xin lỗi, bạn không có đủ quyền để truy cập vào trang này."
          extra={
            <GoBackButton />
          }
        />
      )

    case "500":
      return (
        <Result
          status="500"
          title="500"
          subTitle="Xin lỗi, Máy chủ đang trong quá trình tu sửa."
          extra={
            <GoBackButton />
          }
        />
      )

    case "comingsoon":
      return (
        <Result
          icon={<Icon type="smile" theme="twoTone" />}
          title="Coming soon"
          extra={
            <GoBackButton />
          }
        />
      )

    default: return (
      <Result
        status="?"
        title="?"
        subTitle="Xin lỗi! Trang bạn ????"
        extra={
          <GoBackButton />
        }
      />
    )
  }
}
