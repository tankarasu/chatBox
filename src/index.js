import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import Connexion from "./component/Connexion";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoound from "./component/NotFoound";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Connexion} />
        <Route path="/pseudo/:pseudo" component={App} />
        <Route  component={NotFoound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
