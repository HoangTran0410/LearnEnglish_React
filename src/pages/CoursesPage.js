import React, { Component } from 'react'
// import styled from "styled-components";

import MainLayout from '../layouts/Main';
import SocialCard from '../commons/components/SocialCard';

export default class HomePage extends Component {
  render() {
    return (
      <MainLayout>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <SocialCard />
          <SocialCard />
        </div>
      </MainLayout>
    )
  }
}

