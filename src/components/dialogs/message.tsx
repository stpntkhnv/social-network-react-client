import React from 'react';
import {connect} from "react-redux";

const Message = (props: any) => {

    console.log(props)

    let authorMessage = () => (
        <div className={"w-100 d-flex justify-content-end "}>
            <p className={"p-3"} style={{backgroundColor: '#00abfe', maxWidth: '25%', borderRadius: '2em'}}>{props.message.text}</p>
        </div>

    )

    let recipientMessage = () => (
        <div className={"w-100 d-flex justify-content-start "}>
            <p className={"p-3"} style={{backgroundColor: '#4de62e', maxWidth: '25%', borderRadius: '2em'}}>{props.message.text}</p>
        </div>

    )

    if(props.message.sender.userName == props.auth.authUser.profile.name)
        return authorMessage()
    else
        return recipientMessage()

};

let mapStateToProps = (state: any) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Message);