import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact />
        <Route path="/work/:slug" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
