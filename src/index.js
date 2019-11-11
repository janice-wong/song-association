import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App.js";
import Welcome from "./components/welcome";
import Game from "./components/game";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
      <Switch>
        <Route exact path="/game" component={Game} />
      </Switch>
    </div>
    <App />
  </Router>,
  document.getElementById("root")
);
