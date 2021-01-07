import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/Login/Login";
import Restoran from "./pages/Restoran/Restoran";

import "./App.scss";
const App = () => {
  const currentUser = false;

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/login" /> : <SignIn />)}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/restoran" component={Restoran} />
      </Switch>
    </div>
  );
};

export default App;
