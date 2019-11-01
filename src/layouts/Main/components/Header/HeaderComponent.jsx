/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Icon, Affix, Input } from "antd";
import styled from "styled-components";

export default class HeaderComponent extends Component {
  render() {
    return (
      <StyledHeaderContainer>
        <div className="header">
          <h1>Learn English</h1>
          <p>Better Way To Learn English.</p>
        </div>

        <div className="topnav">
          <div className="navs">
            <a className="active" href="#home">
              <Icon type="home" theme="filled" /> Trang chủ
            </a>
            <a href="#courses">
              <Icon type="book" theme="filled" /> Khoá học
            </a>
            <a href="#footer">
              <Icon type="mail" theme="filled" /> Liên hệ
            </a>
            <a href="#login">
              <Icon type="user" /> Đăng nhập
            </a>
          </div>
          {/* <Affix offsetTop={0}> */}
          <div className="search-courses">
            <Input.Search
              placeholder="Tìm khoá học..."
              enterButton
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
          {/* </Affix> */}
        </div>
      </StyledHeaderContainer>
    );
  }
}

const StyledHeaderContainer = styled.header`
  .header {
    padding: 60px;
    text-align: center;
    background: #00c5f9;
    color: white;
  }

  .topnav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: #3f72af;

    .navs {
      display: flex;
      flex-wrap: nowrap;

      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;

        :hover {
          background-color: #dbe2ef;
          color: #112d4e;
        }

        &.active {
          background-color: #2196f3;
          color: white;
        }
      }
    }

    .search-courses {
      margin: 5px;
    }
  }

  @media screen and (max-width: 700px) {
    .topnav {
      flex-direction: column;
      overflow: auto;

      .navs {
        flex-direction: column;
        a {
          display: block;
          text-align: left;
          margin: 0;
          padding: 14px;
        }
      }

      .search-courses {
        padding: 10px;
        margin: 0;
      }
    }
  }
`;
