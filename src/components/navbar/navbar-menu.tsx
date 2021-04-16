import React from 'react';
import {Link} from "react-router-dom";
import {
    ChatbubblesOutline,
    HomeOutline,
    PeopleOutline,
    PersonCircleOutline
} from "react-ionicons";

const NavbarMenu = () => {
    return (
        <div className="nav-wrapper d-flex pw-50">
            <Link to="/" className="m-4">
                <HomeOutline />
            </Link>
            <Link to="/dialogs" className="m-4">
                <ChatbubblesOutline />
            </Link>
            <Link to="/peoples" className="m-4">
                <PeopleOutline />
            </Link>
            <Link to='/profile/stpn.tkhnv@gmail.com' className="m-4">
                <PersonCircleOutline />
            </Link>
        </div>
    );
};

export default NavbarMenu;