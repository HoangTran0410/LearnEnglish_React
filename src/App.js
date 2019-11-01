import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/courses">
          <CoursesPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
