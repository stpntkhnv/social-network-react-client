import {HubConnection} from "@microsoft/signalr";
import {IDialog, IMessage} from "../interfaces";
import {finishLoading, startLoading} from "../loading/actions";
import {getAllDialogsByName, getDialog} from "../../services/signalRService";
import dialogsList from "../../components/dialogs/dialogsList";

export const SET_CONNECTION = "SET_CONNECTION"
export const SET_DIALOG = 'SET_DIALOG'
export const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS'

interface setConnectionAction{
    type: typeof SET_CONNECTION,
    connection: HubConnection
}

interface setDialogAction {
    type: typeof SET_DIALOG,
    dialog: IDialog
}

interface setAllDialogsAction {
    type: typeof SET_ALL_DIALOGS,
    dialogsList: IDialog[]
}

export type chatAction = setConnectionAction | setDialogAction | setAllDialogsAction;

export const setConnection = (connection: HubConnection) => ({type:"SET_CONNECTION", connection: connection});
export const setDialog = (dialog: IDialog) => ({type: SET_DIALOG, dialog: dialog})
export const setAllDialogs = (dialogsList: IDialog[]) => ({type: SET_ALL_DIALOGS, dialogsList: dialogsList})

export const getDialogThunk = (firstUserName: string, secondUserName: string) => {
    return  async (dispatch: any) => {
        dispatch(startLoading())
        getDialog(firstUserName, secondUserName)
            .then(dialog => {
                dispatch(setDialog(dialog))
                dispatch(finishLoading())
            })
    }
}
export const getAllDialogsThunk = (userName: string) => {
    return async (dispatch: any) => {
        dispatch(startLoading())
        getAllDialogsByName(userName)
            .then(dialogsList => {
                dispatch(setAllDialogs(dialogsList))
                dispatch(finishLoading())
            })
    }
}
