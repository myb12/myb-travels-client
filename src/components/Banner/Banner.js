import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-section" >
            <Container className="banner-container">
                <h1 className="banner-heading">
                    PLAN YOUR TOUR WITH <br />
                    <span style={{ color:'#62ac1e'}}>MYB TRAVELS</span>
                </h1>
                <Row className="banner-field">
                    <Col md={4}>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaMapMarkerAlt className="banner-icon" />
                            </span>
                            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Place or Hotel" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaRegCalendarAlt className="banner-icon" />
                            </span>
                            <input type="date" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaRegCalendarAlt className="banner-icon" />
                            </span>
                            <input type="date" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-regular text-center">GO</button>
                </div>
            </Container>
        </section >
    );
};

export default Banner;