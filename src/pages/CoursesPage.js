import React, { Component } from 'react'
import styled from 'styled-components';

import CourseCard from '../commons/components/CourseCard';

const data = {
  title: "Làm chủ tiếng anh trong 24h",
  overview: "Here is a custom status with some text and stuff...",
  tags: ["gramma", "ielts"],
  last_update: "June 14, 2019",
  thumbnail:
    "https://cdn01.alison-static.net/courses/183/alison_courseware_intro_183.jpg",
  share: 492,
  student: 3843,
  love: 1336,
  rating: 4
};

export default class HomePage extends Component {
  render() {
    return (
      <SocialContainer className="container">
        <CourseCard data={data} />
        <CourseCard data={data} />
        <CourseCard data={data} />
        <CourseCard data={data} />
        <CourseCard data={data} />
        <CourseCard data={data} />
        <CourseCard data={data} />
      </SocialContainer>
    )
  }
}

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`