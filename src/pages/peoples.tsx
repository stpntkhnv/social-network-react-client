import React, {useState} from 'react';
import UserCard from '../components/users/user-card';
import {getAllUsersProfiles} from "../services/usersApi";
import {userProfile} from "../store/interfaces";

function Peoples() {
    const[allUsers, setAllUsers] = useState<userProfile[]>([])
    const[helper, setHelper] = useState(() => {
        return getAllUsersProfiles().then(data => {setAllUsers(data)})
    });

    return (
        <div className="main-section d-flex align-items-start row ml-0 mr-0 overflow-y-hidden justify-content-center justify-content-xl-start">
            {allUsers.map(user => (<UserCard User={user}/>))}
        </div>
    );
}

export default Peoples;