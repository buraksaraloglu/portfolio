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
import Firebase from 'firebase/app';
import 'firebase/analytics';
import reportWebVitals from './reportWebVitals';

export const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCXgSslyJrYg_BchJ9vuXeUVhlpJFnQRnc',
    authDomain: 'portfolio-e4ce2.firebaseapp.com',
    projectId: 'portfolio-e4ce2',
    storageBucket: 'portfolio-e4ce2.appspot.com',
    messagingSenderId: '974870440786',
    appId: '1:974870440786:web:91ee073c0a77ee1463288b',
    measurementId: 'G-6SPVG1BS56',
  };

  const firebase = Firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function sendToAnalytics({ id, name, value }) {
    window.gtag('send', 'event', {
      eventCategory: 'Web Vitals',
      eventAction: name,
      eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate
    });
  }
  reportWebVitals(sendToAnalytics);

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
