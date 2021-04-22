import React, {useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {finishLoading, startLoading} from "../../store/loading/actions";
import {connect} from "react-redux";

const UserCard = (props: any) => {
    return (

            <Card className="my-2 col-xl-2 col-11 col-lg-4 col-md-6">
                <Link to={{pathname: '/profile/'+props.User.userName, state: {userProfile: props.User}}}>
                <Card.Img variant="top" src={props.User.avatarUrl} />
                <Card.Body>
                    <Card.Title>{props.User.firstName} {props.User.lastName}</Card.Title>
                    <Card.Text>
                        {props.User.status}
                    </Card.Text>

                </Card.Body>
                </Link>
                <Button variant="primary mb-3">Send message</Button>
            </Card>


    );
};

export default UserCard;