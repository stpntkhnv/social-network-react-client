import React from 'react';
import NavbarMenu from './navbar/navbar-menu';
import NavbarUser from "./navbar/navbar-user";
//TODO added icons
function NavBar() {

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

export default NavBar;