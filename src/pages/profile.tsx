import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import '../components/profile/profile.css'
import {getProfileByUserName} from "../services/usersApi";
import {userProfile} from "../store/interfaces";

//TODO refactor all props fot types
function Profile(props: any) {
    const[userProfile, setUserProfile] = useState({});
    useEffect( () => {
        let init = async () => {
            let userName = props.match.params.userName;
            let userProfile : userProfile = await getProfileByUserName(userName);
            setUserProfile(userProfile);
        }

        init();

    }, [])

    return (
        <div className="d-flex">
            <div className="main-section">
                <div className="custom-card d-flex">
                    <div className="w-50 border-right d-flex flex-column justify-content-center align-items-start">
                        <h1 className="display-3">Hello.</h1>
                        <h1>My name is</h1>
                        <h3>I am </h3>
                        <button className="btn-outline-success btn w-auto">View portfolio</button>
                    </div>

                    <div className="w-50 d-flex justify-content-center">
                        <img src="" width="300px" alt="" className="m-5"/>
                    </div>

                </div>
            </div>
            <div className="right-side-bar p-4">
                <p className="uppercase">TWITS:</p>
            </div>
        </div>
    );
}

let mapStateToProps = (state: any) => {

}

let mapDispatchToProps = (dispatch: any) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);