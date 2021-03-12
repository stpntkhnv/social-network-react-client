import React from "react";
import {Route, Switch} from 'react-router'
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import Callback from "./pages/callback";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./pages/profile";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/callback-oidc" component={Callback}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
  );
}

export default App;
