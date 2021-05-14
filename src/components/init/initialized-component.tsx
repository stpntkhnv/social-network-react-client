import React, {useEffect} from 'react';
import * as signalR from "@microsoft/signalr";
import {getAllDialogsThunk, setAllDialogs, setConnection} from "../../store/signalR/actions";
import {HubConnection} from "@microsoft/signalr";
import {connect} from "react-redux";
import {User} from "oidc-client";
import {setUserProfile, signIn, signOut} from "../../store/authentication/actions";
import authService from "../../services/authService";
import {getProfileByUserName} from "../../services/usersApi";
import {IDialog, IUserProfile} from "../../store/interfaces";
import {getAllDialogsByName} from "../../services/signalRService";
import dialogsList from "../dialogs/dialogsList";
import SignIn from "./sign-in";

const InitializedComponent = (props: any) => {
    //sign-in, set-connection

    useEffect(() => {
        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:5001/chat")
            .configureLogging(signalR.LogLevel.Information)
            .build()

        hubConnection.on("ReceiveMessage", () => {
            getAllDialogsByName(props.auth.authUser.profile.name)
                .then((dialogsList: IDialog[]) => {
                    props.getAllDialogs(props.auth.authUser.profile.name)
                })
        })

        hubConnection.start().then(a => {
            if (hubConnection.connectionId) {
                hubConnection.invoke("sendConnectionId", hubConnection.connectionId);
            }
        })



        props.setConnection(hubConnection);


        //TODO: replace with thunk



    }, [null])

    return (
        <div>
            <SignIn/>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    loading: state.loading,
    chat: state.chat,
    auth: state.auth
})

const mapDispatchToProps = (dispatch: any) => ({
    setConnection: (connection: HubConnection) => {dispatch(setConnection(connection))},
    signIn: (user: User) => {dispatch(signIn(user))},
    signOut: () => {dispatch(signOut())},
    setUserProfile: (userProfile: IUserProfile) => {dispatch(setUserProfile(userProfile))},
    getAllDialogs: (userName: string) => dispatch(getAllDialogsThunk(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitializedComponent);