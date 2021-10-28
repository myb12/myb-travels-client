import React from 'react';
import { Card, Col} from 'react-bootstrap';

const Service = () => {
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src="http://www.shmai.com/preview/travelco/assets/images/tours/tours1.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <button className="btn btn-regular">Book Now</button>

            </Card>
        </Col>
    );
};

export default Service;