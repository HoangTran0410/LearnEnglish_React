/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Icon, Affix } from "antd";
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
          <Affix offsetTop={0}>
            <div className="search-courses" action="action_page.php">
              <input type="text" placeholder="Tìm khoá học.." name="search" />
              <button>
                <Icon type="search" />
              </button>
            </div>
          </Affix>
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
    overflow: hidden;
    background-color: #247ba0;

    a {
      float: left;
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;

      :hover {
        background-color: #ededed;
        color: black;
      }

      &.active {
        background-color: #2196f3;
        color: white;
      }
    }

    .search-courses {
      float: right;
      margin: 5px;
      // border-radius: 4px;
      // background-color: #247ba0;

      input[type="text"] {
        width: 80%;
        height: 100%;
        padding: 10px;
        font-size: 17px;
        border: none;
        background: #f1f1f1;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      /* Style the submit button */
      button {
        width: 20%;
        height: 100%;
        padding: 9px;
        background: #2196f3;
        color: white;
        font-size: 17px;
        border: none;
        cursor: pointer;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        :hover {
          background: #0b7dda;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .topnav {
      > a,
      .search-courses {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
      }

      .search-courses {
        padding: 8px;
        background-color: #247ba0;
      }
    }
  }
`;
