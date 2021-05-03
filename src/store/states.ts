import {User} from "oidc-client";
import {IDialog, IMessage, IUserProfile} from "./interfaces";
import {HubConnection} from "@microsoft/signalr";

export interface applicationState{
    auth: authState,
    chat: chatState,
    loading: loadingState,
    peoples: peoplesState
}

export interface authState{
    authUser: User | undefined,
    authUserProfile: IUserProfile | undefined,
    isAuthenticated: boolean
}

export interface chatState{
    connection: HubConnection | undefined,
    dialogsList: IDialog[],
    dialog: IDialog
}

export interface loadingState{
    isLoading: boolean,
    status: string
}

export interface peoplesState{
    peoplesList: IUserProfile[]
}