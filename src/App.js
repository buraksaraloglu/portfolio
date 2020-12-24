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
// import firebase from 'firebase/app';
// import 'firebase/analytics';

export const App = () => {
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyCXgSslyJrYg_BchJ9vuXeUVhlpJFnQRnc',
  //   authDomain: 'buraksaraloglu.com',
  //   projectId: 'portfolio-e4ce2',
  //   storageBucket: 'portfolio-e4ce2.appspot.com',
  //   messagingSenderId: '974870440786',
  //   appId: '1:974870440786:web:91ee073c0a77ee1463288b',
  //   measurementId: 'G-6SPVG1BS56',
  // };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.analytics();

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
