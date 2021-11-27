import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => { 
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://sleepy-garden-44797.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user])

    const handleRemove = key => {
        let x = window.confirm("Are you sure you want to delete?");
        if (x){
            fetch(`https://sleepy-garden-44797.herokuapp.com/delete-order/${key}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount>0) {
                    alert('Order Delete Successfully');
                    const newMybooking = orders.filter(booking => booking._id !== key)
                    setOrders(newMybooking)
                }
            })
        }
    }

    return (
        
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>My Orders</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container-fluid p-5">
                <Row>                    
                    <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-2">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Service</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>                            
                        {
                            orders.map(order => 
                                <tr key={order?._id}>
                                    <th scope="row">{order?.name}</th>
                                    <td>{order?.email}</td>
                                    <td>{order?.phone}</td>
                                    <td>{order?.address}</td>
                                    <td>
                                        {order?.service.name} <br/> 
                                        BDT {order?.service.price}/Person <br/> 
                                        {order?.service.day} 
                                    </td>
                                    <td>{order?.status}</td>
                                    <td><button className="btn btn-info" onClick={() => handleRemove(order?._id)}>Delete</button></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    </div>
                </Row>
            </div>
        </>
    );
};

export default MyOrders;