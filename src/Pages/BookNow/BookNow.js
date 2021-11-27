import React from 'react';
import useServices from '../../hooks/useServices';
import { useParams, useHistory  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookNow = () => {
    let history = useHistory();
    const { serviceID } = useParams();
    const { services } = useServices({});
    const packages = services.find(service => service.id === parseInt(serviceID));
    const { register, handleSubmit, formState: { errors } } = useForm();    
    const { user } = useAuth();
    const onSubmit = data => {        
        data.service = packages;
        data.status = "Pending";
        data.user_email=user.email;
        fetch('https://sleepy-garden-44797.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Order processed Successfully');
                history.push('/home');
            }
        })
    };
    return (
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>Book This Service</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container p-5">
                <Row>                    
                    <div className="col-6">
                        <form className="row g-3 align-items-center" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-12">
                                <input className="form-control" defaultValue={user.displayName} {...register("name")} />
                            </div>
                            <div className="col-12">
                                <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                            </div>
                            <div className="col-12">
                                <input className="form-control" placeholder="Address" defaultValue="" {...register("address")} />
                            </div>
                            <div className="col-12">
                                <input className="form-control" placeholder="City" defaultValue="" {...register("city")} />
                            </div>
                            <div className="col-12">
                                <input className="form-control" placeholder="phone number" defaultValue="" {...register("phone")} />
                            </div>
                            <div className="col-12">
                                <input className="btn btn-success" type="submit" value="Book Now" />
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{packages?.name}</h5>
                                <p className="card-text">{packages?.desc}</p>
                                <p className="card-text">BDT {packages?.price}/person</p>
                                <Link to={`/servicedetail/${packages?.id}`}>
                                    <button className="btn btn-info">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    );
};

export default BookNow;