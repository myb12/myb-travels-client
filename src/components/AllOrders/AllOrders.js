import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import './AllOrders.css';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isApprove, setIsApprove] = useState(false);

    useEffect(() => {
        fetch('https://glacial-tor-88710.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            })
    }, [isApprove])

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete the product')) {
            fetch(`https://glacial-tor-88710.herokuapp.com/my-orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = allOrders.filter(order => order._id !== id);
                        setAllOrders(remaining);
                    }
                });
        }
    }

    const handleApprove = (id) => {
        fetch(`https://glacial-tor-88710.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    setIsApprove(!isApprove);
                }
            })
    }

    return (
        <Container style={{ marginTop: 100 }
        }>
            <div className="section-header section-margin-top row">
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h2 className="section-title">Manage orders</h2>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-3">
                    <hr className="title-line" />
                </div>
            </div>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Order Status</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((order, i) => <tr key={order._id} >
                            <td>{i + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.title}</td>
                            <td>{order.price}</td>
                            <td className="d-flex flex-column">
                                {order.orderStatus}
                                <button onClick={() => handleApprove(order._id)} className="btn btn-approve" disabled={order.orderStatus === 'Approved'}>Approve</button>
                            </td>
                            <td>
                                <img height="60" width="60" src={order.imgURL} alt="" />
                            </td>
                            <td >
                                <div onClick={() => handleDelete(order._id)} className="delete-icon">
                                    <FaTrashAlt />
                                </div>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </Container >
    );
};

export default AllOrders;