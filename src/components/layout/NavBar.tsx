import React from 'react';
import NavbarMenu from '../navbar/navbar-menu';
import NavbarUser from "../navbar/navbar-user";
import {connect} from "react-redux";
//TODO added icons
function NavBar(props: any) {

    let anonymousView = () => (
        <h1><NavbarUser /></h1>
    )

    if(!props.auth.isAuthenticated)
        return anonymousView()
    else

    return (
        <nav className="w-100 d-flex justify-content-between sticky-top bg-none">
            <div className="w-25 d-flex">
                <p>connection: {props.chat.connection == undefined ? <p>false</p> : <p>true</p>}</p>
                <p>dialogslist:{props.chat.dialogsList.length == 0 ? <p>false</p> : <p>true</p>}</p>
                <p>authUser: {props.auth.authUser == undefined ? <p>false</p> : <p>true</p>}</p>
                <p>loading: {props.loading.isLoading == false ? <p>false</p> : <p>true</p>}</p>
            </div>
            <NavbarMenu />
            <div className="w-25">
                <NavbarUser />
            </div>
        </nav>
    );
}

let mapStateToProps = (state: any) => ({
    auth: state.auth,
    chat: state.chat,
    loading: state.loading
})

export default connect(mapStateToProps)(NavBar);