import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../components/users/user-card';
import {getAllUsersProfiles} from "../services/usersApi";
import {IUserProfile} from "../store/interfaces";
import {applicationState} from "../store/states";
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";
import {getAllUsersProfilesThunk} from "../store/peoples/actions";
import Loading from "./loading";

function Peoples(props: any) {
    useEffect(() => {
        props.getAllUsersProfiles()
    }, [])

    if(props.loading.isLoading)
        return <Loading/>
    return (
        <div className="main-section d-flex align-items-start row ml-0 mr-0 overflow-y-hidden justify-content-center justify-content-xl-start">
            {props.peoples.peoplesList.map((user: IUserProfile) => (<UserCard User={user}/>))}
        </div>
    );
}

let mapStateToProps = (state: applicationState) => {
    return {
        peoples: state.peoples,
        loading: state.loading
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        startLoading: () => dispatch(startLoading()),
        finishLoading: () => dispatch(finishLoading()),
        getAllUsersProfiles: () => dispatch(getAllUsersProfilesThunk())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);