import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getUser, signinRedirect, signinRedirectCallback, signoutRedirect} from "../services/authService";
import {User} from "oidc-client";
import {ReactComponent} from "*.svg";

function Login(){
    const[identityUser, setIdentityUser] = useState({});
    const[userIsAuthenticated, setAuthenticated] = useState(false);
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log('componentDidMount');
        getUser()
            .then(user => {
                console.log(user);
                if(user)
                {
                    setIdentityUser(user);
                    setAuthenticated(true)
                }else{
                    setIdentityUser({});
                    setAuthenticated(false);
                }
            })
    }, []);

    function login() {
        signinRedirect();
    }

    function check() {
        getUser().then(user => {
            console.log(user);
        });

    }

    function tester() {
        setCount(count + 1);
    }

    function logout() {
        signoutRedirect();
    }

    if (userIsAuthenticated)
    {
        return (
            <React.Fragment>
                <h1>FALSE ALARM!!!!! HEY HEY HEY HEY</h1>
                <button onClick={logout}>logout</button>
                <Link to="/">Home</Link>
            </React.Fragment>
        );
    }else{
        return (
            <div className="bg-black md:bg-blue-50">
                <h1>Login page</h1>
                <h1>{count}</h1>
                <button onClick={login} className="btn">Login</button>
                <button onClick={check}>dasdasd</button>
                <button onClick={tester}>test</button>
                <Link to="/">Home</Link>
            </div>
        );
    }


};

export default Login;
