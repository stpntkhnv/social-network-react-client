import React from 'react';
import {ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const NavbarUser = () => {
    return (
        <div>
            <DropdownButton
                key={'Primary'}
                id={`dropdown-variants-${'Primary'}`}
                variant={'Primary'.toLowerCase()}
                title={'Primary'}
            >

                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default NavbarUser;