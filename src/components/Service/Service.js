import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, desc, price, imgURL } = service;
    const history = useHistory();

    const handleBooking = (id) => {
        history.push(`/order-place/${id}`);
        window.scrollTo(0, 0);
    }
    return (
        <Col>
            <Card className="h-100 service-card">
                <Card.Img variant="top" src={imgURL} className="service-image" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <span>{price}</span>
                </Card.Body>
                <button className="btn btn-regular d-flex align-items-center justify-content-center" onClick={() => handleBooking(_id)}>
                    <FaPlusCircle className="me-1" /> Book Now
                </button>
            </Card>
        </Col>
    );
};

export default Service;