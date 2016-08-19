import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import Home from './home-bak/home';
import Main from './main/main';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>
);
