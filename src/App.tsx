import React, {useEffect} from "react";
import {Route, Switch} from 'react-router'
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import Callback from "./pages/callback";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./pages/profile";
import Dialogs from "./pages/dialogs";
import Peoples from "./pages/peoples";
import Dialog from "./pages/dialog";
import {applicationState} from "./store/states";
import {finishLoading, startLoading} from "./store/loading/actions";
import {connect} from "react-redux";
import Test from "./pages/test";

function App(props:any) {

    let loadingView = (
        <div className="main-section-fluid bg-dark">ASD</div>
    )


      let applicationView = () => (
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/callback-oidc" component={Callback}/>
            <Route path="/profile/:userName" component={Profile} />
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/dialog/:userName" component={Dialog}/>
            <Route path="/peoples" component={Peoples}/>
            <Route path="/test" component={Test}/>
          </Switch>
      );

    const anonymousView = () => (
        <>
            <Route path="/callback-oidc" component={Callback}/>
            <h1 className="main-section-fluid">anonymousView</h1>
        </>
    )

    if(props.auth.isAuthenticated)
        return applicationView()
    else
        return anonymousView()
}

let mapStateToProps = (state: applicationState) => ({
    loading: state.loading,
    auth: state.auth
})

let mapDispatchToProps = (dispatch: any) => ({
    startLoading : () => {
        dispatch(startLoading())
    },
    finishLoading : () => {
        dispatch(finishLoading())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
