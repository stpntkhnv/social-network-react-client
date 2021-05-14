import React, {useEffect} from "react";
import {Route, Switch} from 'react-router'
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import Callback from "./pages/callback";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./pages/profile";
import Peoples from "./pages/peoples";
import Dialog from "./pages/dialog";
import {applicationState} from "./store/states";
import {finishLoading, startLoading} from "./store/loading/actions";
import {connect} from "react-redux";
import Chat from "./pages/chat";
import InitializedComponent from "./components/init/initialized-component";
import Test from "./pages/test";
import SignIn from "./components/init/sign-in";
import Groups from "./pages/groups";
import GroupCreate from "./pages/group-create";

//move store init from navbar to app.tsx

function App(props:any) {
      let authorizedView = () => (
          <div className={"h-100"}>
              <InitializedComponent/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/callback-oidc" component={Callback}/>
                  <Route path="/profile/:userName" component={Profile} />
                  <Route exact path="/chat" component={Chat}/>
                  <Route path="/chat/:userName" component={Chat}/>
                  <Route path="/peoples" component={Peoples}/>
                  <Route path="/dialog/:userName" component={Dialog}/>
                  <Route path="/test" component={Test}/>
                  <Route path="/groups" component={Groups}/>
                  <Route path="/group-create" component={GroupCreate}/>
              </Switch>
          </div>

      );

    const anonymousView = () => (
        <>
            <Route path="/callback-oidc" component={Callback}/>
            <SignIn/>
            <h1 className="main-section-fluid">anonymousView</h1>
        </>
    )

    if(props.auth.isAuthenticated)
        return authorizedView()
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
