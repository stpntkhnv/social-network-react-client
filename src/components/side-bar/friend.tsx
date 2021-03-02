import React from 'react';

//TODO refactor all components

function Friend(props: any) {
    return (
        <div className="w-100 d-flex mb-4 hover-sidebar-item align-items-center justify-content-between pr-5">
            <div className="d-flex align-items-center">
                <img width="36px" height="36px" className="rounded-circle" src={props.img} alt=""/>
                <p className="m-0 ml-3"> {props.name} </p>
            </div>
            {props.IsActive ? <div className="is-active rounded-circle bg-success"></div> : <div></div>}
        </div>
    );
};

export default Friend;