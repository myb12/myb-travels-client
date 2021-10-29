import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import services from '../../data/services.json'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container style={{ marginTop: 50 }}>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </Row>
        </Container>
    );
};

export default Services;