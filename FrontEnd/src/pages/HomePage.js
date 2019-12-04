import React, { Component, Suspense } from 'react'

// import Slideshow from '../commons/components/Slideshow';
// import Features from '../commons/components/Features';
// import Team from '../commons/components/Team';
// import Counter from '../commons/components/Counter';
// import PopularCourses from '../commons/components/PopularCourses';
// import UpcomingEvents from '../commons/components/UpcomingEvents';
// import About from '../commons/components/About';

import HeartLoading from '../commons/components/HeartLoading';

const Slideshow = React.lazy(() => import('../commons/HomePage/Slideshow'));
const Features = React.lazy(() => import('../commons/HomePage/Features'));
const Team = React.lazy(() => import('../commons/HomePage/Team'));
const Counter = React.lazy(() => import('../commons/HomePage/Counter'));
const PopularCourses = React.lazy(() => import('../commons/HomePage/PopularCourses'));
const UpcomingEvents = React.lazy(() => import('../commons/HomePage/UpcomingEvents'));
const About = React.lazy(() => import('../commons/HomePage/About'));

export default class HomePage extends Component {
  render() {
    return (
      <Suspense fallback={<HeartLoading />}>
        <Slideshow />
        <Features />
        <About />
        <PopularCourses />
        {/* <UpcomingEvents /> */}
        <Counter />
        <Team />
      </Suspense>
    )
  }
}


