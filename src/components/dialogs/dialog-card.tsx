import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


const DialogCard = (props: any) => {
    let secondUserName = props.auth.authUser.profile.name == props.dialog.firstUser.userName ?  props.dialog.secondUser.userName : props.dialog.firstUser.userName

    return (
        <>
            <Link to={{ pathname: "/chat/"+secondUserName }} className="w-100 bg-info">
                <ListItem button>
                    <ListItemIcon>
                        <img width="36px" height="36px" className="rounded-circle mr-3"
                             src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
                             alt=""/>
                    </ListItemIcon>
                    <div className={"d-flex  flex-column"}>
                        <ListItemText primary={secondUserName}/>
                        <ListItemText className={"singleLineText"}  secondary="Привет, красавчик. Может, познакомимся?" />
                    </div>
                </ListItem>
            </Link>
        </>

    );
};

let mapStateToProps = (state: any) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(DialogCard);