import React from 'react';
import {Link} from "react-router-dom";

const NavbarMenu = () => {
    return (
        <div className="nav-wrapper d-flex pw-50">
            <Link to="/messages" className="m-4">Messages</Link>
            <Link to="/friends" className="m-4">Friends</Link>
            <Link to="/groups" className="m-4">Groups</Link>
            <Link to="/profile" className="m-4">Profile</Link>
        </div>
    );
};

export default NavbarMenu;