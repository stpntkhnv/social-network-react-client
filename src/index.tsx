import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftSideBar from "./components/layout/left-side-bar";
import { Provider } from 'react-redux';
import {store} from "./store/configureStore";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <NavBar/>
                <div className={"app"}>
                    <App/>
                </div>
        </Provider>

    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
