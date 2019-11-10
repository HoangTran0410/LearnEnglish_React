/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Icon, Tooltip } from "antd";
import styled from "styled-components";

const data = [
  {
    title: "About",
    list: ["Services", "Portfolio", "Pricing", "Customers", "Careers"]
  },
  { title: "Resources", list: ["Docs", "Blog", "eBooks", "Webinars"] },
  { title: "Contact", list: ["Help", "Sales", "Advertise"] }
];

export default function FooterComponent(props) {
  return (
    <StyledFooterContainer>
      <section className="ft-main">
        {data.map(({ title, list }) => (
          <div className="ft-main-item" key={title}>
            <h2 className="ft-title">{title}</h2>
            <ul>
              {list.map(i => (
                <li key={i}>
                  <a href="#">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <div className="form">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <section className="ft-social">
        <ul className="ft-social-list">
          {[
            ["facebook", "Facebook"],
            ["twitter-circle", "Twitter"],
            ["instagram", "Instagram"],
            ["github", "Github"],
            ["linkedin", "Linkedin"],
            ["youtube", "Youtube"]
          ].map(i => (
            <li key={i[0]}>
              <a href="#">
                <Tooltip title={i[1]}>
                  <Icon type={i[0]} theme="filled" />
                </Tooltip>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>&copy; 2019 Copyright SGUers Team.</li>
        </ul>
      </section>
    </StyledFooterContainer>
  );
}

const StyledFooterContainer = styled.footer`
  flex: 1;
  background-color: #00264d;
  color: #bbb;
  line-height: 1.5;

  ul {
    list-style: none;
    padding-left: 0;

    a {
      text-decoration: none;
      color: #eee;
      display: block;
      margin-bottom: 10px;

      :hover {
        color: #2196f3;
        text-decoration: underline;
      }
    }
  }

  /* Footer main */
  .ft-main {
    padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;

    .ft-main-item {
      padding: 1.25rem;
      min-width: 12.5rem;

      p {
        color: #eee;
      }

      .ft-title {
        color: #fff;
        font-weight: bold;
        font-size: 1.375rem;
        padding-bottom: 0.625rem;
      }
    }
  }

  @media only screen and (min-width: 29.8125rem /* 477px */) {
    .ft-main {
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 77.5rem /* 1240px */) {
    .ft-main {
      justify-content: space-evenly;
    }
  }

  /* Footer main | Newsletter form */
  .form {
    display: flex;
    /* flex-wrap: wrap; */

    input[type="email"] {
      color: #333;
      border: 0;
      padding: 0.625rem;
      margin-top: 0.3125rem;
    }
    button {
      background-color: #3f72af;
      color: #fff;
      cursor: pointer;
      border: 0;
      padding: 0.625rem 0.9375rem;
      margin-top: 0.3125rem;
      transition: 0.3s;

      :hover {
        background-color: #00d188;
      }
    }
  }
  /* Footer social */
  .ft-social {
    padding: 0 1.875rem 1.25rem;

    .ft-social-list {
      display: flex;
      justify-content: center;
      border-top: 1px #777 solid;
      padding-top: 1.25rem;

      li {
        padding: 0.5rem;
        font-size: 1.5rem;
      }
    }
  }
  /* Footer legal */
  .ft-legal {
    padding: 0.9375rem 1.875rem;
    background-color: #00171f;

    .ft-legal-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 0.125rem 0.625rem;
        white-space: nowrap;

        /* one before the last child */
        :nth-last-child(2) {
          flex: 1;
        }
      }
    }
  }
`;
