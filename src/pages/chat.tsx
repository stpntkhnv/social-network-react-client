import React, {useState} from 'react';
import DialogsList from "../components/dialogs/dialogsList";
import Dialog from "./dialog";
import {applicationState} from "../store/states";
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {IDialog, initialDialog} from "../store/interfaces";

const Chat = (props: any) => {
    const[selectedDialog,selectDialog] = useState<IDialog | undefined>(undefined)

    return (
        <div>
            <h1>chat page</h1>
            <div className="d-flex bg-dark">
                <DialogsList dialogsList={props.chat.dialogsList}/>
            </div>
        </div>
    );
};

let mapStateToProps = (state: applicationState) => ({
    auth: state.auth,
    loading: state.loading,
    chat: state.chat
})

let mapDispatchToProps = (dispatch: any) => ({
    startLoading: () => {dispatch(startLoading())},
    finishLoading: () => {dispatch(finishLoading())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);