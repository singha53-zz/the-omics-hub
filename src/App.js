import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

// import "assets/scss/material-kit-react.css?v=1.3.0";

// dashboard css
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/animate.min.css";
// import "assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "assets/css/demo.css";
// import "assets/css/pe-icon-7-stroke.css";

var hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route exact path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>
);

export default App;

