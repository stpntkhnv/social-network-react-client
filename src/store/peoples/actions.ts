import {finishLoading, startLoading} from "../loading/actions";
import {getAllUsersProfiles} from "../../services/usersApi";
import {IUserProfile} from "../interfaces";

export const GET_USERS = 'GET_USERS'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const SET_ALL_USERS_PROFILES = 'SET_ALL_USERS_PROFILES'

interface getUsersAction{
    type: typeof GET_USERS
}

interface setAllUsersProfilesAction{
    type: typeof SET_ALL_USERS_PROFILES
    usersProfiles: IUserProfile[]
}

interface getAllUsersAction {
    type: typeof GET_ALL_USERS
}

export type peoplesAction = setAllUsersProfilesAction | getAllUsersAction | getUsersAction

export const getUsers = (pageNumber: number, pageSize: number) => ({type: GET_USERS, pageNumber, pageSize})
export const getAllUsers = () => ({type: GET_ALL_USERS})
export const setAllUsersProfiles = (usersProfiles: IUserProfile[]) => ({type: SET_ALL_USERS_PROFILES, usersProfiles: usersProfiles})

export const getAllUsersProfilesThunk = () => {
    return async (dispatch: any) => {
        dispatch(startLoading())
        getAllUsersProfiles()
            .then(users => {
                dispatch(setAllUsersProfiles(users))
                dispatch(finishLoading())
            })
    }
}