import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import CustomSpinner from '../Spinner/CustomSpinner';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://glacial-tor-88710.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (!services.length) {
        return <CustomSpinner />
    }

    return (
        <Container style={{ marginTop: 50 }}>
            <div className="section-header section-margin-top row">
                <div className="col-lg-4 col-md-3 col-sm-3"><hr className="title-line" /></div>
                <div className="col-lg-4 col-md-6 col-sm-6"><h2 className="section-title">Our Tours</h2></div>
                <div className="col-lg-4 col-md-3 col-sm-3"><hr className="title-line" /></div>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </Row>
        </Container>
    );
};

export default Services;