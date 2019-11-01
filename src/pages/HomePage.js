import React, { Component } from 'react'
import styled from "styled-components";

import MainLayout from '../layouts/Main';

export default class HomePage extends Component {
  render() {
    return (
      <MainLayout>
        <StyledContentContainer>
          <div className="row">
            <div className="side">
              <h2>About Me</h2>
              <h5>Photo of me:</h5>
              <div className="fakeimg big">Image</div>
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>
              <h3>More Text</h3>
              <p>Lorem ipsum dolor sit ame.</p>
              <div className="fakeimg">Image</div>
              <br />
              <div className="fakeimg">Image</div>
              <br />
              <div className="fakeimg">Image</div>
            </div>
            <div className="main">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg big">Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
              <br />
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className="fakeimg big">Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </StyledContentContainer>
      </MainLayout>
    )
  }
}

const StyledContentContainer = styled.div`
  /* Column container */
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  /* Sidebar/left column */
  .side {
    flex: 30%;
    background-color: #f1f1f1;
    padding: 20px;
  }

  /* Main column */
  .main {
    flex: 70%;
    background-color: white;
    padding: 20px;
  }

  /* Fake image, just for this example */
  .fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
    height: 60px;

    &.big {
      height: 200px;
    }
  }

  @media screen and (max-width: 700px) {
    .row {
      flex-direction: column;
    }
  }
`;
