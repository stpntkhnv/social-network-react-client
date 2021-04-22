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
import {setConnection, updateDialogs} from "../../store/signalR/actions";
import {HubConnection} from "@microsoft/signalr";
import {finishLoading, startLoading} from "../../store/loading/actions";
import {getAllDialogsByName} from "../../services/signalRService";
import {IDialog, initialDialog} from "../../store/interfaces";
import '../layout/layout.css'

const NavbarMenu = (props: any) => {
    useEffect(() => {
        props.startLoading()
        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:5001/chat")
            .configureLogging(signalR.LogLevel.Information)
            .build();
        if(props.auth.isAuthenticated)
            getAllDialogsByName(props.auth.authUser.profile.name)
                .then(dialogsList => {
                    props.updateDialogs(dialogsList)
                })



        props.setConnection(hubConnection);

        hubConnection.start().then(a => {
            // Once started, invokes the sendConnectionId in our ChatHub inside our ASP.NET Core application.
            if (hubConnection.connectionId) {
                hubConnection.invoke("sendConnectionId", hubConnection.connectionId);
            }
        });

        hubConnection.on("ReceiveMessage", () => {
        })

        props.finishLoading()


    }, [])

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
    },
    updateDialogs: (dialogsList: IDialog[]) => {
        dispatch(updateDialogs(dialogsList))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);