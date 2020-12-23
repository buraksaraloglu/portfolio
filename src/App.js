import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import { HomeContainer } from './containers/home';
import { ProjectContainer } from './containers/project';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route path="/work/:slug" exact>
          <ProjectContainer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};
