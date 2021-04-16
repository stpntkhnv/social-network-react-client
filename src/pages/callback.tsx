import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import authService, {signinRedirectCallback} from "../services/authService";
import {connect} from "react-redux";
import {User} from "oidc-client";
import {applicationState} from "../store/states";
import {setUserProfile, signIn} from "../store/authentication/actions";
import {getProfileByUserName} from "../services/usersApi";
import {userProfile} from "../store/interfaces";

function Callback(props: any) {
    const history = useHistory()
    useEffect(() => {
         function signInAsync(){
            signinRedirectCallback()
                .then(user => {
                    props.signIn(user);
                    getProfileByUserName(user.profile.name)
                        .then(data => {
                            props.setUserProfile(data)
                        })
                });

            history.push('/')
        };

        signInAsync();
    },[history])
    return (
        <div>
            <h1>This is callback page</h1>
            <Link to="/login">Home</Link>
        </div>
    );
}

let mapStateToProps = (state: applicationState) => {}
let mapDispatchToProps = (dispatch: any) => ({
    signIn: (user: User) => {dispatch(signIn(user))},
    setUserProfile: (userProfile: userProfile) => {dispatch(setUserProfile(userProfile))}
})


export default connect(mapStateToProps,mapDispatchToProps)(Callback);