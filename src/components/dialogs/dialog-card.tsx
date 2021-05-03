import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";


const DialogCard = (props: any) => {
    let secondUser = props.auth.authUser.profile.name != props.dialog.firstUser.userName ? props.auth.authUser.profile : props.dialog.secondUser;
    return (
        <Link to={{ pathname: "/chat/"+secondUser.userName, state: {userProfile: secondUser} }} className="w-100 bg-info">
            <h1>{secondUser.userName}</h1>
        </Link>
    );
};

let mapStateToProps = (state: any) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(DialogCard);