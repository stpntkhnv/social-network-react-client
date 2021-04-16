import React from 'react';
import {Button, Card} from "react-bootstrap";

const UserCard = (props: any) => {
    return (
        <Card style={{}} className="my-2 col-xl-2 col-11 col-lg-4 col-md-6">
            <Card.Img variant="top" src={props.User.avatarUrl} />
            <Card.Body>
                <Card.Title>{props.User.firstName} {props.User.lastName}</Card.Title>
                <Card.Text>
                    {props.User.status}
                </Card.Text>
                <Button variant="primary">Send message</Button>
            </Card.Body>
        </Card>
    );
};

export default UserCard;