import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { PageNotFound } from './PageNotFound';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return(
    <Router>
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </>
    </Router>
  );
}

