import React, {useEffect, useState} from 'react';
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {applicationState} from "../store/states";
import {IDialog, IUserProfile} from "../store/interfaces";
import { Link } from 'react-router-dom';

function Dialogs(props: any) {
    const[dialogsList, setDialogsList] = useState<IDialog[]>(props.chat.dialogsList)

    useEffect(() => {
        setDialogsList(props.chat.dialogsList)
    })

    let unloadedView = () => (<h1>loading...</h1>)


    if(props.loading.isLoading)
        return unloadedView()
    else
    return (
        <div className="main-section-fluid">
            <h1>Your dialogs</h1>
            {
                dialogsList
                    .map(dialog => {
                        let secondUser = dialog.firstUser.userName == props.auth.authUser.profile.name ? dialog.secondUser.userName : dialog.firstUser.userName
                        return (<Link to={{pathname: `/dialog/${secondUser}`, state: {userProfile: dialog.firstUser.userName == props.auth.authUser.profile.name ? dialog.secondUser : dialog.firstUser}}} >{secondUser}        {dialog.messages.length}</Link>
                    )}
                )


            }
        </div>
    );
}

let mapStateToProps = (state: applicationState) => ({
    auth: state.auth,
    loading: state.loading,
    chat: state.chat
})

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => dispatch(startLoading()),
    finishLoading: () => dispatch(finishLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);