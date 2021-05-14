import React from 'react';
import { Link } from 'react-router-dom';

const Groups = () => {
    return (
        <div>
            <h1>Groups list</h1>
            <Link to="group-create">Create</Link>
        </div>
    );
};

export default Groups;