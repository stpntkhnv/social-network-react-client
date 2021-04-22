import React from 'react';
import {applicationState} from "../../store/states";
import {connect} from "react-redux";
import {IDialog} from "../../store/interfaces";
import DialogCard from "./dialog-card";

const DialogsList = (props: any) => {
    return (
        <div>
            {props.dialogsList.map((dialog:IDialog) => {return <DialogCard dialog={dialog}/>})}
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