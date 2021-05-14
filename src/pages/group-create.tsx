import React from 'react';

const GroupCreate = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault()
        alert('ti pidor')
    };

    return (
        <div>
            <h1>Create group</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={"name"}/>
                <input type="text" placeholder={"type"}/>
                <input type="submit" placeholder={"type"}/>
            </form>
        </div>
    );
};

export default GroupCreate;