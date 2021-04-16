import {User} from "oidc-client";
import {userProfile} from "./interfaces";

export interface applicationState{
    auth: authState
}

export interface authState{
    authUser: User | undefined,
    authUserProfile: userProfile | undefined,
    isAuthenticated: boolean
}