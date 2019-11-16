import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


// import HomePage from './pages/HomePage';
// import CoursesPage from './pages/CoursesPage';
// import LoginPage from './pages/LoginPage';
// import MainLayout from './layouts/Main';
// import AutoScrollToTop from './commons/components/AutoScrollToTop';
import LoadingComponent from './commons/components/LoadingComponent';
import 'antd/dist/antd.css';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CoursesPage = React.lazy(() => import('./pages/CoursesPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const MainLayout = React.lazy(() => import('./layouts/Main'));
const AutoScrollToTop = React.lazy(() => import('./commons/components/AutoScrollToTop'));

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Router>
        <AutoScrollToTop>
          <Switch>
            <Route exact path="/">
              <Redirect replace to="/home" />
            </Route>

            <Route path="/home">
              <MainLayout>
                <HomePage />
              </MainLayout>
            </Route>

            <Route path="/courses">
              <MainLayout>
                <CoursesPage />
              </MainLayout>
            </Route>

            <Route path="/login">
              <MainLayout>
                <LoginPage />
              </MainLayout>
            </Route>
          </Switch>
        </AutoScrollToTop>
      </Router>
    </Suspense>
  );
}

export default App;
