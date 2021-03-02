import React from "react";
import {Route, Router, Switch} from 'react-router'
import {BrowserRouter, NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import Callback from "./pages/callback";
import Main_page from "./components/test";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/callback-oidc" component={Callback}/>
        <Route path="/test" component={Main_page}/>
      </Switch>
  );
}

export default App;
