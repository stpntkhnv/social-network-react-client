import React, {useEffect, useState} from 'react';
import DialogsList from "../components/dialogs/dialogsList";
import Dialog from "./dialog";
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {IDialog} from "../store/interfaces";
import {getAllDialogsThunk} from "../store/signalR/actions";
import { List } from '@material-ui/core';

const Chat = (props: any) => {
    const[selectedDialog, selectDialog] = useState<IDialog | undefined>(undefined)
    useEffect(() => {
        props.getAllDialogs(props.auth.authUser.profile.name)
    }, [])

    let dialogIsChangedView = () => (
        <>
            <div className={"w-100"}>
                <div style={{width: '20vw'}}>

                    <div className={"w-100"}>
                        <h1>adfasdf</h1>
                        <h1>adfasdf</h1>
                        <h1>adfasdf</h1><h1>adfasdf</h1>
                        <h1>adfasdf</h1>
                        <h1>adfasdf</h1>
                        <h1>adfasdf</h1><h1>adfasdf</h1>


                    </div>
                </div>
            </div>
            <h1>dialog is changed</h1>
            <DialogsList/>
            <h1>selectedDialog: {selectedDialog == undefined ? <span>false</span> : <span>true</span>}</h1>
            <Dialog key={props.match.params.userName} userName={props.match.params.userName}/>
        </>
    )
    let dialogIsNotChangedView = () => (
        <>
            <h1>dialog not changed</h1>
            <DialogsList/>
        </>
    )

    if(props.match.params.userName == undefined)
        return dialogIsNotChangedView()
    else
        return dialogIsChangedView()
};

let mapStateToProps = (state: any) => ({
    auth: state.auth,
    chat: state.chat,
    loading: state.loading
})
let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading()),
    getAllDialogs: (userName: string) => dispatch(getAllDialogsThunk(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)