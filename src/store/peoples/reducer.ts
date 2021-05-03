import {peoplesState} from "../states";
import {peoplesAction, SET_ALL_USERS_PROFILES} from "./actions";

let initialState : peoplesState = {
    peoplesList: []
}

export const peoplesReducer = (state = initialState, action: peoplesAction) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state
            }
        case 'GET_ALL_USERS':
            return {
                ...state
            }
        case SET_ALL_USERS_PROFILES:
            return {
                ...state,
                peoplesList: action.usersProfiles
            }
        default:
            return {
                ...state
            }
    }
}