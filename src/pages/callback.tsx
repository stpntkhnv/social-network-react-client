import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {signinRedirectCallback} from "../services/authService";

function Callback() {
    useEffect(() => {
        async function signInAsync(){
            await signinRedirectCallback();
        };

        signInAsync();
    })
    return (
        <div>
            <h1>This is callback page</h1>
            <Link to="/login">Home</Link>
        </div>
    );
}

export default Callback;