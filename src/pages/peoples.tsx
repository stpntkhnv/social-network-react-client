import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../components/users/user-card';
import {getAllUsersProfiles} from "../services/usersApi";
import {IUserProfile} from "../store/interfaces";
import {applicationState} from "../store/states";
import {finishLoading, startLoading} from "../store/loading/actions";
import {connect} from "react-redux";

function Peoples(props: any) {
    const[allUsers, setAllUsers] = useState<IUserProfile[]>([])


    useEffect(() => {
            const fetchUsers = async () => {
            props.startLoading()
            getAllUsersProfiles().then(data => {
                setAllUsers(data)
            })
            props.finishLoading()
        }

        fetchUsers()
    }, [])

    return (
        <div className="main-section d-flex align-items-start row ml-0 mr-0 overflow-y-hidden justify-content-center justify-content-xl-start">
            {allUsers.map(user => (<UserCard User={user}/>))}
        </div>
    );
}

let mapStateToProps = (state: applicationState) => {
    return {
        p: state
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        startLoading: () => dispatch(startLoading()),
        finishLoading: () => dispatch(finishLoading())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);