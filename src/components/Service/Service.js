import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, desc, price, imgURL } = service;
    const history = useHistory();

    const handleBooking = (id) => {
        history.push(`/order-place/${id}`)
    }
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={imgURL} className="service-image" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <span>{price}</span>
                </Card.Body>
                <button className="btn btn-regular" onClick={() => handleBooking(_id)}>Book Now</button>
            </Card>
        </Col>
    );
};

export default Service;