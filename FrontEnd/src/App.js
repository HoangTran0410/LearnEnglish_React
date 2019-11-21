import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import HeartLoading from './commons/components/HeartLoading';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CoursesPage = React.lazy(() => import('./pages/CoursesPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const MainLayout = React.lazy(() => import('./layouts/Main'));
const AutoScrollToTop = React.lazy(() => import('./commons/components/utils/AutoScrollToTop'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))

function Container(props) {
  return (
    <Suspense fallback={<HeartLoading fullPage />}>
      <AutoScrollToTop>

        <Switch>
          <Route path={["/blog", "/about", "/pages", "/contact"]}>
            <ErrorPage type="comingsoon" />
          </Route>

          <Route exact path={["/", "/courses", "/login"]}>
            <MainLayout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>

                <Route path="/courses">
                  <CoursesPage />
                </Route>

                <Route path="/login">
                  <LoginPage />
                </Route>
              </Switch>
            </MainLayout>
          </Route>

          <Route>
            <ErrorPage type="404" />
          </Route>

        </Switch>

      </AutoScrollToTop>
    </Suspense>
  );
}

const App = () => (
  <HashRouter>
    <Container />
  </HashRouter>
);

export default App;
