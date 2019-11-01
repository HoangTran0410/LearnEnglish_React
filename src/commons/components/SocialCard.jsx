// https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application/

import React from "react";
import styled from "styled-components";
import { Icon, Avatar } from "antd";

const SocialCard = () => (
  <StyledSocialCardContainer>
    {/* <div className="fakeimg">
      <p className="center">Images</p>
    </div> */}
    <img
      src="https://cdn01.alison-static.net/courses/183/alison_courseware_intro_183.jpg"
      alt="hey"
    />
    <div className="social_card_body">
      <div className="social_basic_info">
        <p>
          @grammar @ielts
          <br />
          <span>June 14, 2019</span>
        </p>
        <Avatar size="large" icon="user" />
      </div>

      <p>Here is a custom status with some text and stuff...</p>

      <div className="social_interactions">
        <p>
          <Icon type="share-alt" /> 492
        </p>
        <p>
          <Icon type="retweet" /> 3,843
        </p>
        <p>
          <Icon type="heart" theme="filled" /> 1,336
        </p>
      </div>
    </div>
    <button className="open-btn">Xem chi tiết</button>
  </StyledSocialCardContainer>
);

export default SocialCard;

const StyledSocialCardContainer = styled.div`
  max-width: 280px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 30px auto;

  img {
    max-width: 100%;
  }

  .fakeimg {
    width: 100%;
    background: #dedede;
    height: 150px;
    position: relative;

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
    }
  }

  .social_card_body {
    padding: 10px 20px;

    .social_basic_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
      }
    }

    .social_interactions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 0;

        /* icon */
        i {
          padding: 5px;
          font-weight: 300;
          font-size: 1rem;
          color: #999;
        }
      }
    }
  }

  .open-btn {
    width: 100%;
    padding: 14px;
    margin: 0;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background: #3f72af;
      color: white;
    }
  }
`;
