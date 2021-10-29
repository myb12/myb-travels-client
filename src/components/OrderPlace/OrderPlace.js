import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderPlace.css';

const OrderPlace = () => {
    const [specificService, setSpecificService] = useState({});
    const { user } = useAuth();
    const { serviceId } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://glacial-tor-88710.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setSpecificService(data);
            })
    }, [])

    const handleNameChange = (e) => {
        const updatedName = e.target.value;
        const updatedOrder = { ...specificService };
        updatedOrder.name = updatedName;
        setSpecificService(updatedOrder);
    }

    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        const updatedOrder = { ...specificService };
        updatedOrder.email = updatedEmail;
        setSpecificService(updatedOrder);
    }
    const handleAddressChange = (e) => {
        const updatedAddress = e.target.value;
        const updatedOrder = { ...specificService };
        updatedOrder.address = updatedAddress;
        setSpecificService(updatedOrder);
    }
    const handleTitleChange = (e) => {
        const updatedTourTitle = e.target.value;
        const updatedOrder = { ...specificService };
        updatedOrder.title = updatedTourTitle;
        setSpecificService(updatedOrder);
    }
    const handleDescriptionChange = (e) => {
        const updatedDescription = e.target.value;
        const updatedOrder = { ...specificService };
        updatedOrder.desc = updatedDescription;
        setSpecificService(updatedOrder);
    }
    const handlePriceChange = (e) => {
        const updatedPrice = e.target.value;
        const updatedOrder = { ...specificService };
        updatedOrder.price = updatedPrice;
        setSpecificService(updatedOrder);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        specificService.name = user.displayName;
        specificService.email = user.email;
        specificService.orderStatus = "Pending";

        delete specificService._id;
        console.log(specificService);
        fetch('https://glacial-tor-88710.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(specificService)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successfully');
                    setSpecificService({});
                    history.push('/my-orders');
                }
            })
    }

    return (
        <Container style={{ marginTop: 100 }}>
            <Row className="d-flex justify-content-center">
                <Col sm={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleNameChange} type="text" placeholder="Insert Your Name" value={user.displayName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" placeholder="name@example.com" value={user.email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleAddressChange} as="textarea" rows={3} value={specificService?.address || ''} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tour Title</Form.Label>
                            <Form.Control onChange={handleTitleChange} type="text" value={specificService?.title || ''} placeholder="Insert Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tour Description</Form.Label>
                            <Form.Control onChange={handleDescriptionChange} value={specificService?.desc || ''} as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tour Price</Form.Label>
                            <Form.Control onChange={handlePriceChange} value={specificService?.price || ''} type="text" placeholder="Insert Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <img style={{ width: 150 }} src={specificService?.imgURL || ''} alt="" />
                        </Form.Group>

                        <input className="btn btn-regular" type="submit" />
                    </Form>
                </Col>
            </Row>
        </Container>
        // <div style={{ marginTop: 30 }}>
        //     <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        //         <Card>
        //             <input defaultValue="Yasin" {...register("name")} className="mt-0" />
        //             <input defaultValue="abc@abc.com" {...register("email", { required: true })} />
        //             {errors.email && <span className="error">This field is required</span>}
        //             <input placeholder="Address" defaultValue="" {...register("address")} />
        //             <input placeholder="Tour Title" defaultValue={specificService?.title} {...register("tourTitle")} />
        //             <input placeholder="Tour Description" defaultValue={specificService?.desc} {...register("description")} />
        //             <input placeholder="Price" defaultValue={specificService?.price} {...register("price")} />
        //             <img style={{ marginTop: 30, width: 150 }} src={specificService?.imgURL} alt="" />
        //             <input placeholder="Image URL" defaultValue={specificService?.imgURL} {...register("image")} />

        //             <input className="btn btn-regular" type="submit" />
        //         </Card>
        //     </form>
        // </div>
    );
};

export default OrderPlace;