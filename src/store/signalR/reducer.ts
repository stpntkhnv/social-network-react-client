import {chatState} from "../states";
import {chatAction, SET_ALL_DIALOGS, SET_CONNECTION, SET_DIALOG} from "./actions";
import {initialDialog} from "../interfaces";

let initialState : chatState = {
    dialogsList: [],
    connection: undefined,
    dialog: initialDialog
}

export const chatReducer = (state = initialState, action: chatAction) => {
    switch (action.type){
        case 'SET_CONNECTION':
            return {
                ...state,
                connection: action.connection

            }
        case SET_ALL_DIALOGS:
            return {
                ...state,
                dialogsList: action.dialogsList
            }

        case SET_DIALOG:
            return {
                ...state,
                dialog: action.dialog
            }
        default:
            return {
                ...state
            }
    }
}