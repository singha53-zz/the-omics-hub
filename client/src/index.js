import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from './routes/index.jsx';

import 'assets/scss/material-kit-react.css?v=1.3.0';

// let hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  <Router>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route exact path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
