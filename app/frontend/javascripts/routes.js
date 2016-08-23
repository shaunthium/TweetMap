import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './main/main';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>
);
