import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';

const AddService = () => {    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();   
    const onSubmit = data => {
        fetch('https://stark-spire-25768.herokuapp.com/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('New Service added Successfully');
                reset();
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
                                <h2>Add New Services</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container">
                <form className="row g-3 align-items-center py-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                        <input className="form-control" placeholder="Service Title" defaultValue="" {...register("name")} />
                        {errors.title && <span className="error">This field is required</span>}
                    </div>
                    <div className="col-12">
                        <input className="form-control" placeholder="Service Details" defaultValue="" {...register("desc", { required: true })} />
                        {errors.details && <span className="error">This field is required</span>}
                    </div>
                    <div className="col-12">
                        <input className="form-control" placeholder="Service Time" defaultValue="" {...register("day")} />
                    </div>
                    <div className="col-12">
                        <input className="form-control" placeholder="Price" defaultValue="" {...register("price")} />
                    </div>
                    <div className="col-12">
                        <input className="form-control" placeholder="Image Url" defaultValue="" {...register("img")} />
                    </div>
                    <div className="col-12">
                        <input className="btn btn-success" type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddService;