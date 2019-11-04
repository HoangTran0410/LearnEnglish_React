// https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application/

import React from "react";
import styled from "styled-components";
import { Icon, Avatar, Tooltip } from "antd";

export default function CourseCard(props) {
  return (
    <StyledSocialCardContainer>
      <img src={props.data.thumbnail} alt="hey" />
      <div className="social_card_body">
        <div className="social_basic_info">
          <p>
            {props.data.tags.map(tag => `@${tag} `)}
            <br />
            <span>{props.data.last_update}</span>
          </p>
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>

        <p>{props.data.overview}</p>

        <div className="social_interactions">
          <p>
            <Tooltip title={`${props.data.share} lượt chia sẻ`}>
              <Icon type="share-alt" /> {props.data.share}
            </Tooltip>
          </p>
          <p>
            <Tooltip title={`${props.data.student} học sinh`}>
              <Icon type="user" /> {props.data.student}
            </Tooltip>
          </p>
          <p>
            <Tooltip title={`${props.data.love} lượt thích`}>
              <Icon type="heart" theme="filled" /> {props.data.love}
            </Tooltip>
          </p>
        </div>
      </div>
      <button className="open-btn">Xem chi tiết</button>
    </StyledSocialCardContainer>
  );
}

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
      margin-bottom: 15px;

      p {
        font-weight: bold;
        margin: 0;
      }
    }

    .social_interactions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        display: flex;
        align-items: center;
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
