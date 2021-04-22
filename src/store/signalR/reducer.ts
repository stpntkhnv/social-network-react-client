import {chatState} from "../states";
import {chatAction, SET_CONNECTION} from "./actions";

let initialState : chatState = {
    dialogsList: [],
    connection: undefined

}

export const chatReducer = (state = initialState, action: chatAction) => {
    switch (action.type){
        case "SEND_MESSAGE":
            return {
                ...state
            }
        case 'SET_CONNECTION':
            return {
                ...state,
                connection: action.connection

            }
        case "RECEIVE_MESSAGE":
            return {
                ...state
            }
        case "UPDATE_DIALOGS":
            return {
                ...state,
                dialogsList: action.dialogsList
            }
        default:
            return {
                ...state
            }
    }
}