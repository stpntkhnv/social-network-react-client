import React from 'react';

const DialogCard = (props: any) => {
    return (
        <div className="w-100 bg-info">
            <h1>{props.dialog.secondUser.userName}</h1>
        </div>
    );
};

export default DialogCard;