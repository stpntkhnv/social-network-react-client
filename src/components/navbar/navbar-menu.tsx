import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {
    ChatbubblesOutline,
    HomeOutline,
    PeopleOutline,
    PersonCircleOutline
} from "react-ionicons";

import * as signalR from "@microsoft/signalr"
import {applicationState} from "../../store/states";
import {connect} from "react-redux";
import {setConnection} from "../../store/signalR/actions";
import {HubConnection} from "@microsoft/signalr";
import {finishLoading, startLoading} from "../../store/loading/actions";
import {getAllDialogsByName} from "../../services/signalRService";
import '../layout/layout.css'

const NavbarMenu = (props: any) => {

    let authView = () => (
        <div className="nav-menu align-items-stretch d-flex ">
            <Link to="/" className="p-4 nav-menu-first-element">
                <HomeOutline />
            </Link>
            <Link to="/chat" className="p-4 nav-menu-element">
                <ChatbubblesOutline />
            </Link>
            <Link to="/peoples" className="p-4 nav-menu-element">
                <PeopleOutline />
            </Link>
            <Link to={`/profile/`} className="p-4 nav-menu-last-element">
                <PersonCircleOutline />
            </Link>
        </div>
    )

    let anonymousView = () => (
        <div className="nav-wrapper d-flex pw-50">
            <Link to="/" className="m-4">
                <HomeOutline />
            </Link>
            <Link to="/chat" className="m-4">
                <ChatbubblesOutline />
            </Link>
            <Link to="/peoples" className="m-4">
                <PeopleOutline />
            </Link>
            <Link to={`/profile/`} className="m-4">
                <PersonCircleOutline />
            </Link>
        </div>
    )

    if(props.auth.isAuthenticated)
        return authView()
    else
        return anonymousView()
};

let mapStateToProps = (state: applicationState) => {
    return {
        chat: state.chat,
        auth: state.auth
    };
}

let mapDispatchToProps = (dispatch: any) => ({
    setConnection: (connection: HubConnection) => {
        dispatch(setConnection(connection))
    },
    finishLoading: () => {
        dispatch(finishLoading())
    },
    startLoading: () => {
        dispatch(startLoading())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);