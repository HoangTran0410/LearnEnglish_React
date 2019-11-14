import React, { Component, Fragment } from 'react'

import Features from '../commons/components/Features';
import Team from '../commons/components/Team';
import Counter from '../commons/components/Counter';
import PopularCourses from '../commons/components/PopularCourses';
import UpcomingEvents from '../commons/components/UpcomingEvents';
import About from '../commons/components/About'

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Features />
        <About />
        <PopularCourses />
        <UpcomingEvents />
        <Team />
        <Counter />
      </Fragment>
    )
  }
}


