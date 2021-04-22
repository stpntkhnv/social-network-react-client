import {User} from "oidc-client";
import {IDialog, IMessage, IUserProfile} from "./interfaces";
import {HubConnection} from "@microsoft/signalr";

export interface applicationState{
    auth: authState,
    chat: chatState,
    loading: loadingState
}

export interface authState{
    authUser: User | undefined,
    authUserProfile: IUserProfile | undefined,
    isAuthenticated: boolean
}

export interface chatState{
    connection: HubConnection | undefined,
    dialogsList: IDialog[]
}

export interface loadingState{
    isLoading: boolean,
    status: string
}