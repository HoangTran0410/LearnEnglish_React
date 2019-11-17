import React, { Component, Suspense } from 'react'

// import Slideshow from '../commons/components/Slideshow';
// import Features from '../commons/components/Features';
// import Team from '../commons/components/Team';
// import Counter from '../commons/components/Counter';
// import PopularCourses from '../commons/components/PopularCourses';
// import UpcomingEvents from '../commons/components/UpcomingEvents';
// import About from '../commons/components/About';

import LoadingComponent from '../commons/components/LoadingComponent/LoadingComponent'

const Slideshow = React.lazy(() => import('../commons/components/Slideshow'));
const Features = React.lazy(() => import('../commons/components/Features'));
const Team = React.lazy(() => import('../commons/components/Team'));
const Counter = React.lazy(() => import('../commons/components/Counter'));
const PopularCourses = React.lazy(() => import('../commons/components/PopularCourses'));
const UpcomingEvents = React.lazy(() => import('../commons/components/UpcomingEvents'));
const About = React.lazy(() => import('../commons/components/About'));


export default class HomePage extends Component {
  render() {
    return (
      <Suspense fallback={<LoadingComponent text="Đang tải trang chủ" />}>
        <Slideshow />
        <Features />
        <About />
        <PopularCourses />
        <UpcomingEvents />
        <Counter />
        <Team />
      </Suspense>
    )
  }
}


