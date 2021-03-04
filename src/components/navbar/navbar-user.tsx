import React, {useEffect, useState} from 'react';
import {NotificationsCircle, NotificationsOutline} from "react-ionicons";
import {connect} from "react-redux";
import {applicationState, authState} from "../../store/States";
import {signIn} from "../../store/Authentication/Actions";
import authService, {checkUser, getUser, signinRedirect, signinRedirectCallback, signoutRedirect} from "../../services/authService";
import {User} from "oidc-client";

const NavbarUser = (props: any) => {
    const[identityUser, setIdentityUser] = useState({});
    const[userIsAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        authService.getUser().then(user => {
            if(user)
            {
                props.signIn(user);
                console.log('auth');
                console.log(user);

                setAuthenticated(true);
                setIdentityUser(user);

                console.log(props);
            }
        })
        getUser()
            .then(user => {
                if(user)
                {
                    props.signIn(user);
                    setAuthenticated(true)
                }else{
                    setIdentityUser({});
                    setAuthenticated(false);
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
                <p className="h-100 m-0 align-middle d-flex align-items-center ml-3" onClick={() => {console.log(props)}}>{props.auth.auth.IdentityUser.profile.name}</p>
                <button className="btn btn-outline-danger ml-3" onClick={logout}>Logout</button>
            </div>
            )
    }

    if (props.auth.auth.IsAuthenticated)
    {
        return (
                authorizedView()
        )
    }else {
        return (
            <div className="h-100 d-flex align-items-center justify-content-end mr-5">
                <button onClick={login} className="btn btn-outline-info">
                    SignIn/SignUp
                </button>
            </div>

        )
    }


};

let mapStateToProps = (state: applicationState) => {
    return {
        auth: state
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (user: User) => dispatch(signIn(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser);