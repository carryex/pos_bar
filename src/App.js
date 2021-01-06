import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";

import "./App.scss";
const App = () => {
  const currentUser = false;
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
      </Switch>
    </div>
  );
};

export default App;
