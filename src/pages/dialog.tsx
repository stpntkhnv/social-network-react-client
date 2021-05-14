import React, {useEffect, useState} from 'react';
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {IDialog, IMessage, initialDialog, initialUserProfile, IUserProfile} from "../store/interfaces";
import {getDialog, sendMessage} from '../services/signalRService';
import {getAllDialogsThunk, getDialogThunk} from "../store/signalR/actions";
import {getProfileByUserName} from "../services/usersApi";
import { Button } from '@material-ui/core';
import Message from "../components/dialogs/message";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

const Dialog = (props: any) => {
    const[message, setMessage] = useState('')
    const[secondUser, setSecondUser] = useState<IUserProfile>(initialUserProfile)
    const[dialog, setDialog] = useState<IDialog>(initialDialog)



    useEffect(() => {
        getProfileByUserName(props.userName)
            .then(profile => {
                setSecondUser(profile)
            })
    }, [null])

    useEffect(() => {
        props.chat.dialogsList.map((dialog: IDialog) => {
            if((dialog.firstUser.userName == props.auth.authUser.profile.name && dialog.secondUser.userName == props.userName)
                ||
                dialog.secondUser.userName == props.auth.authUser.profile.name && dialog.firstUser.userName == props.userName)
            {
                setDialog(dialog)
            }
        })
    }, [props.chat.dialogsList])


    const handleInputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const handleSendMessage = (event: React.FormEvent) => {
        event.preventDefault()
        sendMessage(props.chat.connection, message, props.auth.authUser.profile.name, secondUser.userName)
        props.getAllDialogs(props.auth.authUser.profile.name)
    }

    return (
        <div className={"d-flex flex-column flex-column justify-content-between h-100"}>
            <div className={"scrollable-section"}>
                {dialog.messages.map(message => (<Message message={message}/>))}
            </div>
            <div className={"d-flex w-100 justify-content-center"}>
                <form className={"w-50"} onSubmit={handleSendMessage}>
                    <TextField id="standard-basic" label="Standard" className={"w-75 my-5"} autoComplete={"off"} onChange={handleInputMessage}/>
                    <Button type="submit" variant="outlined" color="primary" className={"w-25 my-5"}>
                        Send
                    </Button>
                </form>
            </div>
        </div>

    )
};

let mapStateToProps = (state: any) => ({
    chat: state.chat,
    auth: state.auth,
    loading: state.loading
})
let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading()),
    getDialog: (firstUserName: string, secondUserName: string) => dispatch(getDialogThunk(firstUserName, secondUserName)),
    getAllDialogs: (userName: string) => dispatch(getAllDialogsThunk(userName))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);