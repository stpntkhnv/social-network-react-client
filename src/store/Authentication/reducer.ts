import {authState} from "../States";
import {authAction} from "./Actions";
import {getProfileByUserName} from "../../api/usersApi";

let initialState : authState = {
    IsAuthenticated: false,
    IdentityOidcUser: undefined,
    IdentityUserProfile: undefined,
    IdentityUserName: undefined
}


export const authReducer = (state = initialState, action: authAction) => {
    switch (action.type){
        case "SIGN_IN":
            console.log('signin')
            let name = action.user.profile.name
            console.log(name)
            let profile = getProfileByUserName(action.user.profile.name);
            console.log(profile)
            return {
                ...state,
                IsAuthenticated: true,
                IdentityOidcUser: action.user,
                IdentityUserProfile: getProfileByUserName(action.user.profile.name),
                IdentityUserName: action.user.profile.name
            }
        case "SING_OUT":
            return {
                ...state,
                IsAuthenticated: false,
                IdentityOidcUser: undefined,
                IdentityUserProfile: undefined,
                IdentityUserName: undefined
            }
        default:
            return state;
    }
}