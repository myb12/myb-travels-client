import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-section">
            {/* <div className="banner">
                <img src="http://www.shmai.com/preview/travelco/assets/images/bg/home2bg.jpg" alt="" />
            </div> */}
            <Container className="banner-container">
                <h1 className="banner-heading">PLAN YOUR TOUR</h1>
                <Row className="banner-field">
                    <Col md={4}>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaMapMarkerAlt />
                            </span>
                            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Place or Hotel" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaRegCalendarAlt />
                            </span>
                            <input type="date" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaRegCalendarAlt />
                            </span>
                            <input type="date" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Button className="btn-regular text-center">
                        GO
                    </Button>
                </div>
            </Container>
        </section >
    );
};

export default Banner;