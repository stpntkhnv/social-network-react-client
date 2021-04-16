import {User} from "oidc-client";
import {userProfile} from "../interfaces";

export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

interface signInAction{
    type: typeof SIGN_IN,
    user: User
}

interface signOutAction{
    type: typeof SIGN_OUT
}

interface setUserProfileAction{
    type: typeof SET_USER_PROFILE,
    profile: userProfile
}

export type authAction = signInAction | signOutAction | setUserProfileAction;

export const signIn = (user: User) => ({type: SIGN_IN, user: user})
export const signOut = () => ({type: SIGN_OUT})
export const setUserProfile = (profile: userProfile) => ({type: SET_USER_PROFILE, profile: profile})

