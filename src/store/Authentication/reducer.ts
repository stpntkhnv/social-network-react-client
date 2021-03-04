import {authState} from "../States";
import {authAction} from "./Actions";
import authService from "../../services/authService";
import {User} from "oidc-client";

let initialState : authState = {
    IsAuthenticated: false,
    IdentityOidcUser: undefined,
    IdentityUser: undefined
}


export const authReducer = (state = initialState, action: authAction) => {
    switch (action.type){
        case "SIGN_IN":
            return {
                IsAuthenticated: true,
                IdentityOidcUser: action.user
            }
        case "SING_OUT":
            return {
                IsAuthenticated: false,
                IdentityOidcUser: undefined
            }
        default:
            return state;
    }
}