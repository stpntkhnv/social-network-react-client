import React, {useEffect} from 'react';
import authService from "../../services/authService";
import {getProfileByUserName} from "../../services/usersApi";
import {connect} from "react-redux";
import {User} from "oidc-client";
import {setUserProfile, signIn, signOut} from "../../store/authentication/actions";
import {getAllDialogsThunk} from "../../store/signalR/actions";
import {IUserProfile} from "../../store/interfaces";

const SignIn = (props: any) => {
    useEffect(() => {
        authService.getUser().then(user => {
            if(user)
            {
                props.signIn(user);
                getProfileByUserName(user.profile.name)
                    .then(profile => {
                        props.setUserProfile(profile)
                    })
            }
        })
    }, [null])
    return (
        <div>
            
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch: any) => ({
    signIn: (user: User) => {dispatch(signIn(user))},
    signOut: () => {dispatch(signOut())},
    getAllDialogs: (userName: string) => dispatch(getAllDialogsThunk(userName)),
    setUserProfile: (userProfile: IUserProfile) => {dispatch(setUserProfile(userProfile))}
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);