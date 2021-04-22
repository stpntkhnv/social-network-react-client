import React, {useEffect, useState} from 'react';
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {IDialog, initialDialog, initialUserProfile} from "../store/interfaces";
import {getAllDialogsByName, getDialog, sendMessage} from "../services/signalRService";
import {updateDialogs} from "../store/signalR/actions";
import DialogsList from "../components/dialogs/dialogsList";

const Dialog = (props: any) => {
    const[secondUserProfile, setSecondUserProfile] = useState(props.location.state.userProfile)
    const[dialog, setDialog] = useState(initialDialog)
    const[message, setMessage] = useState('')

    useEffect(() => {
        if(props.auth.isAuthenticated)
        getDialog(props.auth.authUser.profile.name, secondUserProfile.userName)
            .then(dialog => {
                setDialog(dialog)
            })
    }, [])

    useEffect(() => {
        if(props.auth.isAuthenticated)
            getDialog(props.auth.authUser.profile.name, secondUserProfile.userName)
                .then(dialog => {
                    setDialog(dialog)
                })
    })


    const logProps = () => {
        console.log(props)
    };

    const handleInputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    };

    const handleSendMessage = () => {

        sendMessage(props.chat.connection, message, props.auth.authUser.profile.name, secondUserProfile.userName)

        getAllDialogsByName(props.auth.authUser.profile.name)
            .then(dialogsList => {
                    props.updateDialogs()
                }
            )
    }

    const anonymousView = () => (<h1 className="main-section-fluid">AnonymousView</h1>)

    const authorizedView = () => (
        <>
            <div>
                <DialogsList dialogsList={props.chat.dialogsList}/>
            </div>
            <div className="main-section-fluid d-none">
                <button className="btn btn-outline-success" onClick={logProps}>Log props</button>
                <div>
                    <pre></pre>
                </div>
                <input type="text" onChange={handleInputMessage}/>
                <p>{message}</p>
                <button className="btn btn-outline-info" onClick={handleSendMessage}>send message</button>

                <h1>Dialog with: {secondUserProfile.userName}</h1>
                <h1>Count messages: {dialog.messages.length}</h1>
                {dialog.messages.map(message => (<h1>{message.text}</h1>))}
            </div>
        </>

    )

    if(props.auth.isAuthenticated)
        return authorizedView()
    else
        return anonymousView()
};

let mapStateToProps = (state: any) => ({
    chat: state.chat,
    auth: state.auth,
    loading: state.loading
})

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading()),
    updateDialogs: (dialogsList: IDialog[]) => dispatch(updateDialogs(dialogsList))
})


export default connect(mapStateToProps, mapDispatchToProps)(Dialog);