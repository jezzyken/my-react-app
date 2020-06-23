import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";

import LoginPage from "./LoginPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/welcomePage/:name" component={WelcomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
