/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Icon, Affix, Input } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function HeaderComponent(props) {
  const [showSearhBar, toggleSearchBar] = useState(true);
  // const [searchValue, setSearchValue] = useState("");

  return (
    <StyledHeaderContainer>
      <div className="big-header">
        <h1>Learn English</h1>
        <p>Better Way To Learn English.</p>
      </div>

      <Affix offsetTop={0}>
        <div className="topnav">
          <div className="navs">
            <NavLink exact to="/" activeClassName="active">
              <Icon type="home" theme="filled" />
              <p>Trang chủ</p>
            </NavLink>

            <NavLink to="/courses" activeClassName="active">
              <Icon type="book" theme="filled" />
              <p>Khoá học</p>
            </NavLink>

            <NavLink to="/login" activeClassName="active">
              <Icon type="user" />
              <p>Đăng nhập</p>
            </NavLink>

            <a
              className="toggle-search"
              onClick={() => toggleSearchBar(!showSearhBar)}
            >
              <Icon type="search" />
              <p>Tìm</p>
            </a>
          </div>
          {showSearhBar && (
            <div className="search-courses">
              <Input.Search
                enterButton
                placeholder="Tìm khoá học..."
                size="large"
                // value={searchValue}
                // onChange={e => setSearchValue(e.target.value)}
                onSearch={value => console.log(value)}
              />
            </div>
          )}
        </div>
      </Affix>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.header`
  .big-header {
    padding: 20px 70px;
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
        outline: none;
        display: block;
        color: white;
        text-align: center;
        background: transparent;
        padding: 14px 16px;
        border: none;
        cursor: pointer;

        :hover {
          background-color: #dbe2ef;
          color: #112d4e;
        }

        p {
          display: inline;
          font-size: 1.1em;
          ::before {
            content: " ";
          }
        }

        &.active {
          background-color: #2196f3;
          color: white;
        }

        &.toggle-search {
          display: none;
        }
      }
    }

    .search-courses {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      transition: all 0.4s;
    }
  }

  @media screen and (max-width: 700px) {
    .topnav {
      flex-direction: column;
      overflow: auto;

      .navs {
        a {
          flex-grow: 1;
          display: block;
          margin: 0;
          padding: 5px;

          &.toggle-search {
            display: block;
          }

          p {
            display: block;
            font-size: 12px;
            margin: 0;
          }
        }
      }

      .search-courses {
        padding: 5px;
        margin: 0;
        background: #dbe2ef;
      }
    }
  }
`;
