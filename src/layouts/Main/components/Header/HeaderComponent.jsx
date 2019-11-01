/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Icon, Affix, Input } from "antd";
import styled from "styled-components";

export default class HeaderComponent extends Component {
  state = {
    showSearhBar: true
  };

  render() {
    const { showSearhBar } = this.state;

    return (
      <StyledHeaderContainer>
        <div className="header">
          <h1>Learn English</h1>
          <p>Better Way To Learn English.</p>
        </div>

        <Affix offsetTop={0}>
          <div className="topnav">
            <div className="navs">
              <button className="active">
                <Icon type="home" theme="filled" />
                <p>Trang chủ</p>
              </button>
              <button>
                <Icon type="book" theme="filled" />
                <p>Khoá học</p>
              </button>
              <button>
                <Icon type="user" />
                <p>Đăng nhập</p>
              </button>
              <button
                className="toggle-search"
                onClick={() => this.setState({ showSearhBar: !showSearhBar })}
              >
                <Icon type="search" />
                <p>Tìm</p>
              </button>
            </div>
            {showSearhBar && (
              <div className="search-courses">
                <Input.Search
                  placeholder="Tìm khoá học..."
                  enterButton
                  size="large"
                  onSearch={value => console.log(value)}
                />
              </div>
            )}
          </div>
        </Affix>
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

    .navs,
    .navs-mini {
      display: flex;
      flex-wrap: nowrap;

      button {
        display: block;
        color: white;
        font-size: 17px;
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
      margin: 5px;
    }
  }

  @media screen and (max-width: 700px) {
    .topnav {
      flex-direction: column;
      overflow: auto;

      .navs {
        button {
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
      }
    }
  }
`;
