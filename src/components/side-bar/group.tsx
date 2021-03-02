import React from 'react';

function Group(props: any) {
    return (
        <div className="w-100 d-flex align-items-center mb-4 hover-sidebar-item">
            <img width="36px" height="36px" className="rounded-circle"
                 src={props.img} alt=""/>
            <p className="m-0 ml-3">{props.name}</p>
        </div>
    );
}

export default Group;