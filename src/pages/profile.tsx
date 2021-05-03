import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import '../components/profile/profile.css'
import {getProfileByUserName} from "../services/usersApi";
import {initialUserProfile, IUserProfile} from "../store/interfaces";

//TODO refactor all props fot types
function Profile(props: any) {
    const[userProfile, setUserProfile] = useState<IUserProfile>(initialUserProfile);
    useEffect( () => {
        let init = async () => {
            let userName = props.match.params.userName;
            let userProfile = await getProfileByUserName(userName);
            setUserProfile(userProfile);
        }

        init();

    }, [])

    function asdasd() {
        console.log(props)
    }

    return (
        <div className="d-flex">
            <div className="main-section">
                <div className="custom-card d-flex">
                    <div className="w-50 border-right d-flex flex-column justify-content-center align-items-start">
                        <h1 className="display-3" onClick={asdasd}>Hello.</h1>
                        <h1>My name is {userProfile.firstName} {userProfile.lastName}</h1>
                        <h3>I am {userProfile.job}</h3>
                        <button className="btn-outline-success btn w-auto">View portfolio</button>
                    </div>

                    <div className="w-50 d-flex justify-content-center">
                        <img src="" width="300px" alt="" className="m-5"/>
                    </div>

                </div>

                <Link to={{pathname: `/chat/${userProfile.userName}`, state: {userProfile: props.location.state.userProfile}}} className="btn btn-success">Send message</Link>
            </div>
            <div className="right-side-bar p-4">
                <p className="uppercase">TWITS:</p>
            </div>


        </div>
    );
}


export default Profile;