import React, { Suspense } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";

// import { TransitionGroup, CSSTransition } from "react-transition-group";

import ErrorBoundary from './commons/components/ErrorBoundary';
import LoadingComponent from './commons/components/LoadingComponent/LoadingComponent';

// import HomePage from './pages/HomePage';
// import CoursesPage from './pages/CoursesPage';
// import LoginPage from './pages/LoginPage';
// import MainLayout from './layouts/Main';
// import AutoScrollToTop from './commons/components/AutoScrollToTop';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CoursesPage = React.lazy(() => import('./pages/CoursesPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const MainLayout = React.lazy(() => import('./layouts/Main'));
const AutoScrollToTop = React.lazy(() => import('./commons/components/AutoScrollToTop'));

const loadingFullPage = (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"
    }}
  >
    <LoadingComponent />
  </div>
)

function Container() {
  return (
    <ErrorBoundary>
      <Suspense fallback={loadingFullPage}>

        <MainLayout adminRoutes={["/admin"]} frontPageRoutes={["/home", "/", "/courses", "/login"]}>
          <AutoScrollToTop>
            <Switch>

              <Route path={["/home", "/"]}>
                <HomePage />
              </Route>

              <Route path="/courses">
                <CoursesPage />
              </Route>

              <Route path="/login">
                <LoginPage />
              </Route>

              <Route>
                <h2 style={{ textAlign: 'center', padding: 100 }}>Not Thing Yet</h2>
              </Route>

            </Switch>
          </AutoScrollToTop>
        </MainLayout>

      </Suspense>
    </ErrorBoundary>
  );
}

const App = () => (
  <HashRouter>
    <Container />
  </HashRouter>
);

export default App;
