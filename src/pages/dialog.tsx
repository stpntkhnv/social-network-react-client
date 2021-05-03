import React, {useEffect, useState} from 'react';
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {IDialog, IMessage, initialDialog, initialUserProfile, IUserProfile} from "../store/interfaces";
import {getDialog, sendMessage} from '../services/signalRService';
import {getAllDialogsThunk, getDialogThunk} from "../store/signalR/actions";
import {getProfileByUserName} from "../services/usersApi";

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

    const handleSendMessage = () => {
        sendMessage(props.chat.connection, message, props.auth.authUser.profile.name, secondUser.userName)
        props.getAllDialogs(props.auth.authUser.profile.name)
    }

    return (
        <>
            <button onClick={() => {
                console.log(props)
            }}>Log props</button>
            <h1>hello, i'm dialog with {props.userName}</h1>
            <input type="text" onChange={handleInputMessage}/>
            <button onClick={handleSendMessage}>send Message</button>
            <p>{dialog.messages.length}</p>
            {dialog.messages.map((message: IMessage) => (<h1>{message.text}</h1>))}

        </>

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