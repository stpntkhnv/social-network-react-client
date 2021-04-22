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
        <nav className="position-absolute mx-auto w-100 d-flex justify-content-between sticky-top">
            <div className="w-25"></div>
            <NavbarMenu />
            <div className="w-25">
                <NavbarUser />
            </div>
        </nav>
    );
}

let mapStateToProps = (state: any) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(NavBar);