import {authState} from "../states";
import {authAction} from "./actions";

let initialState : authState = {
    isAuthenticated: false,
    authUser: undefined,
    authUserProfile: undefined
}

export const authReducer = (state = initialState, action: authAction) => {
    switch (action.type){
        case "SIGN_IN":
            return {
                ...state,
                isAuthenticated: true,
                authUser: action.user
            }
        case "SIGN_OUT":
            return {
                ...state,
                isAuthenticated: false,
                authUser: undefined,
                authUserProfile: undefined
            }
        case "SET_USER_PROFILE":
            return{
                ...state,
                authUserProfile: action.profile
            }
        default:
            return{
                ...state
            }
    }
}