import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/Main';
import AutoScrollToTop from './commons/components/AutoScrollToTop';

function App() {
  return (
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
  );
}

export default App;
