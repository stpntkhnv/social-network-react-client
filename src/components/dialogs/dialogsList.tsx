import React from 'react';
import {applicationState} from "../../store/states";
import {connect} from "react-redux";
import {IDialog} from "../../store/interfaces";
import DialogCard from "./dialog-card";
import { Link } from 'react-router-dom';

const DialogsList = (props: any) => {
    return (
        <div>
            {props.chat.dialogsList.map((dialog:IDialog) => {
                let secondUserName = props.auth.authUser.profile.name == dialog.firstUser.userName ?  dialog.secondUser.userName : dialog.firstUser.userName
                    return (
                        <Link to={"/chat/"+secondUserName}>{secondUserName}</Link>
                    )
                }
            )}
            <Link to={'/chat/'}>X</Link>
        </div>
    );
};

let mapStateToProps = (state: applicationState) => ({
    auth: state.auth,
    chat: state.chat,
    loading: state.loading
})

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => {

    },
    finishLoading: () => {

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(DialogsList);