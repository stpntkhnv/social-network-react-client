import React, {useEffect, useState} from 'react';
import DialogsList from "../components/dialogs/dialogsList";
import Dialog from "./dialog";
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {IDialog} from "../store/interfaces";
import {getAllDialogsThunk} from "../store/signalR/actions";
import {Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';

const Chat = (props: any) => {
    const[selectedDialog, selectDialog] = useState<IDialog | undefined>(undefined)
    useEffect(() => {
        props.getAllDialogs(props.auth.authUser.profile.name)
    }, [])

    let dialogIsChangedView = () => (
        <>
            <div className={"d-flex w-100 h-100"}>
                <div className={"w-25 overflow-auto"}>
                    <DialogsList/>
                </div>
                <div className={"w-75"}>
                    <Dialog key={props.match.params.userName} userName={props.match.params.userName}/>
                </div>

            </div>
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