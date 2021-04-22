import {HubConnection} from "@microsoft/signalr";
import {IDialog, IMessage} from "../interfaces";

export const SEND_MESSAGE = "SEND_MESSAGE"
export const SET_CONNECTION = "SET_CONNECTION"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const UPDATE_DIALOGS = "UPDATE_DIALOGS"

interface sendMessageAction{
    type: typeof SEND_MESSAGE,
    message: string,
    senderUserName: string,
    receiverUserName: string
}

interface setConnectionAction{
    type: typeof SET_CONNECTION,
    connection: HubConnection
}

interface receiveMessageAction{
    type: typeof RECEIVE_MESSAGE,
    message: IMessage
}

interface updateDialogsAction{
    type: typeof UPDATE_DIALOGS,
    dialogsList: IDialog[]
}


export type chatAction = sendMessageAction | setConnectionAction | receiveMessageAction | updateDialogsAction;

export const sendMessage = (message: string, senderUserName: string, receiverUserName: string) => ({type: "SEND_MESSAGE", message: message, senderUserName: senderUserName, receiverUserName: receiverUserName});
export const setConnection = (connection: HubConnection) => ({type:"SET_CONNECTION", connection: connection});
export const receiveMessage = (message: IMessage) => ({type: "RECEIVE_MESSAGE", message: message})
export const updateDialogs = (dialogsList: IDialog[]) => ({type:UPDATE_DIALOGS, dialogsList: dialogsList})