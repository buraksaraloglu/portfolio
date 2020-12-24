import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

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

const rootElement = document.getElementById('root');
render(<App />, rootElement);
