import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    return (
        <Container style={{ marginTop: 50 }}>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Service />
                ))}
            </Row>
        </Container>
    );
};

export default Services;