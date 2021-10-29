import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-orders?email=${user.email}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [])
    console.log(myOrders);
    return (
        <Container style={{ marginTop: 30 }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tour Title</th>
                        <th>Tour Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{order.title}</td>
                            <td>{order.price}</td>
                            <td>
                                <img height="50" width="50" src={order.imgURL} alt="" />
                            </td>
                            <td >
                                <FaTrashAlt />
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrders;