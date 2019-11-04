import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class LoginPage extends Component {
  render() {
    return (
      <div style={{ margin: 30 }}>
        <Row type="flex" justify="center">
          <Col xs={24} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
          <Col xs={12} sm={16} md={12} lg={8} xl={4}>
            Col
          </Col>
          <Col xs={12} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
        </Row>
      </div>
    )
  }
}
