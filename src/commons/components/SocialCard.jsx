// https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application/

import React from "react";
// import styled from "styled-components";
import { Icon, Avatar } from "antd";

const SocialCard = () => (
  <div className="social_card">
    <div className="fakeimg">Image</div>
    <div className="social_card_body">
      <div>
        <p>
          @some_lego_guy
          <br />
          <span>Mar 14</span>
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
          <Icon type="heart" /> 1,336
        </p>
      </div>
    </div>
  </div>
);

export default SocialCard;
