import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import authService, {signinRedirectCallback} from "../services/authService";
import {connect} from "react-redux";
import {User} from "oidc-client";
import {signIn} from "../store/Authentication/Actions";

function Callback(props: any) {
    const history = useHistory()
    useEffect(() => {
         function signInAsync(){
            signinRedirectCallback()
                .then(user => {
                    props.signIn(user);
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

let mapStateToProps = () => {
    return {

    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (user: User) => {
            let action = signIn(user);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);