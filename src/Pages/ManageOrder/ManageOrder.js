import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://sleepy-garden-44797.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])

    
    const handleUpdate = key => {
        let x = window.confirm("Are you sure you want to Confirm?");
        if (x){
            fetch(`https://sleepy-garden-44797.herokuapp.com/confirm-order/${key}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(result => {
                if (result.matchedCount>0) {
                    alert('Order Update Successfully');
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
                                <h2>All Orders</h2>
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
                                <tr key={order._id}>
                                    <th scope="row">{order.name}</th>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.address}</td>
                                    <td>
                                        {order?.service.name} <br/> 
                                        BDT {order?.service.price}/Person <br/> 
                                        {order?.service.day}                                         
                                    </td>
                                    <td>{order.status}</td>
                                    <td><button className="btn btn-info" onClick={() => handleUpdate(order._id)}>Confirmed</button></td>
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

export default ManageOrder;