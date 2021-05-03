import React, {useEffect} from 'react';
import { NotificationsOutline} from "react-ionicons";
import authService, {signinRedirect, signoutRedirect} from "../../services/authService";
import {applicationState} from "../../store/states";
import {User} from "oidc-client";
import {setUserProfile, signIn, signOut} from "../../store/authentication/actions";
import {IUserProfile} from "../../store/interfaces";
import {getProfileByUserName} from "../../services/usersApi";
import {connect} from "react-redux";

const NavbarUser = (props: any) => {



    function login(){
        signinRedirect();
    }

    function logout() {
        signoutRedirect();
    }

    function authorizedView() {
        return (
            <div className="h-100 d-md-flex d-none align-items-center justify-content-center text-white">
                <div className="mr-3">
                    <NotificationsOutline />
                </div>
                <img width="36px" height="36px" className="rounded-circle" src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png" alt=""/>
                <p className="h-100 m-0 align-middle d-flex align-items-center ml-3" onClick={() => {
                    console.log(props)}}>{props.auth.authUser.profile.name}</p>
                <button className="btn btn-outline-danger ml-3" onClick={logout}>Logout</button>
            </div>
            )
    }

    function anonymousView() {
        return (
            <div className="h-100 d-md-flex align-items-center justify-content-end mr-5 d-none">
                <button onClick={login} className="btn btn-outline-info">
                    SignIn/SignUp
                </button>
            </div>
        )
    }

    if (props.auth.isAuthenticated){
        return (
            authorizedView()
        )
    }
    else {
        return (
            anonymousView()
        )
    }

};

let mapStateToProps = (state: applicationState) => ({auth: state.auth, chat: state.chat})
let mapDispatchToProps = (dispatch: any) => ({
    signIn: (user: User) => {
        dispatch(signIn(user))
    },
    signOut: () => {
        dispatch(signOut())
    },
    setUserProfile : (userProfile: IUserProfile) => {
        dispatch(setUserProfile(userProfile))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser);