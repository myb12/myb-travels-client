import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { SiWebmoney } from 'react-icons/si';
import { FaBookmark, FaPlusCircle } from 'react-icons/fa';
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
                <div className="price-ribbon">
                    <small className="d-flex align-items-center">
                        <SiWebmoney className="me-2" />
                        {price}
                    </small>
                </div>
                <Card.Img variant="top" src={imgURL} className="service-image" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-grey">
                        {desc}
                    </Card.Text>
                </Card.Body>
                <div className="row">
                    <div className="col-10 pe-0">
                        <button className="btn btn-book d-flex align-items-center justify-content-center w-100" onClick={() => handleBooking(_id)}>
                            <FaPlusCircle className="me-1" /> Book Now
                        </button>
                    </div>
                    <div className="col-2 ps-0">
                        <button className="h-100 w-100 btn btn-bookmark d-flex align-items-center justify-content-center">
                            <FaBookmark className="me-1" />
                        </button>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default Service;