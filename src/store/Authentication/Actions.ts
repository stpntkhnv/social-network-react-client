import {User} from "oidc-client";

const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SING_OUT";

export interface signInAction{
    type: typeof SIGN_IN;
    user: User;
}

export interface signOutAction {
    type: typeof SIGN_OUT;
}

export type authAction = signInAction | signOutAction;

export const signIn = (user: User) : signInAction => ({ type: SIGN_IN, user: user });

export const signOut = () : signOutAction => ({ type: SIGN_OUT });
