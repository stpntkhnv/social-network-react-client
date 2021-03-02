import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './navbar/navbar-menu';
import NavbarUser from "./navbar/navbar-user";
//TODO added icons
function NavBar() {

    return (
        <nav className="position-absolute mx-auto w-100 d-flex justify-content-between">
            <div className="w-25"></div>
            <NavbarMenu />
            <div className="w-25">
                <NavbarUser />
            </div>
        </nav>
    );
}

export default NavBar;