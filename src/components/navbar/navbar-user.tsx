import React, {useEffect, useState} from 'react';
import { NotificationsOutline} from "react-ionicons";
import {connect} from "react-redux";
import {applicationState} from "../../store/States";
import {signIn} from "../../store/Authentication/Actions";
import authService, {signinRedirect, signoutRedirect} from "../../services/authService";
import {User} from "oidc-client";

const NavbarUser = (props: any) => {
    useEffect(() => {
        authService.getUser().then(user => {
            if(user)
            {
                props.signIn(user);
            }
        })
    }, []);

    function login(){
        signinRedirect();
    }

    function logout() {
        signoutRedirect();
    }


    function authorizedView() {
        return (
            <div className="h-100 d-flex align-items-center justify-content-center text-white">
                <div className="mr-3">
                    <NotificationsOutline />
                </div>
                <img width="36px" height="36px" className="rounded-circle" src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png" alt=""/>
                <p className="h-100 m-0 align-middle d-flex align-items-center ml-3" onClick={() => {
                    console.log(props)}}>{props.auth.IdentityOidcUser.profile.name}</p>
                <button className="btn btn-outline-danger ml-3" onClick={logout}>Logout</button>
            </div>
            )
    }


    function anonymousView() {
        return (
            <div className="h-100 d-flex align-items-center justify-content-end mr-5">
                <button onClick={login} className="btn btn-outline-info">
                    SignIn/SignUp
                </button>
            </div>
        )
    }

    if (props.auth.IsAuthenticated)
    {
        return (
            authorizedView()
        )
    }else {
        return (
            anonymousView()
        )
    }


};

let mapStateToProps = (state: applicationState) => {
    return {
        auth: state.auth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (user: User) => dispatch(signIn(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser);