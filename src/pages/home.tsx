import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from "../logo.svg";
import {connect} from "react-redux";
import authService from "../services/authService";


function Home(props: any) {




    function checkUser() {
        authService.getUser().then(user => {
            if(user){
                alert('da')
            }else{
                alert('net');
            }
        })
    }

    return (
        <div className="App w-100">
            <header className="">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Link to='/Login'>Login</Link>
                <button onClick={checkUser}>dasd</button>
            </header>
        </div>
    );
}

let mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        increment: () => {
            dispatch({type: "INCREMENT"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);