import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { BASE_URL } from '../../config/config';
import useAuth from '../../hooks/useAuth';
import CustomSpinner from '../Spinner/CustomSpinner';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/my-orders?email=${user.email}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [])

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete the order?')) {
            fetch(`${BASE_URL}/my-orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myOrders.filter(order => order._id !== id);
                        setMyOrders(remaining);
                    }
                });
        }
    }

    if (!myOrders.length)  return <CustomSpinner />;

    return (
        <Container style={{ marginTop: 100 }}>
            <div className="section-header section-margin-top row">
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h2 className="section-title">My Orders</h2>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
            </div>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Order Status</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, i) => <tr key={order._id}>
                            <td>{i + 1}</td>
                            <td>{order.title}</td>
                            <td>{order.price}</td>
                            <td >
                                {order.orderStatus}
                            </td>
                            <td>
                                <img height="60" width="60" src={order.imgURL} alt="" />
                            </td>
                            <td >
                                <div onClick={() => handleDelete(order._id)} className="delete-icon">
                                    <FaTrashAlt />
                                </div>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrders;