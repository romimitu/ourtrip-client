import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, price, day, img, id } = props.service;
    return (
        <Col md={4} sm={6} xs={12} className='text-start mb-5'>
            <div className="service-card">
                <div className="service-img">
                    <img src={img} alt="ServiceImage" className='img-fluid' />
                </div>
                <div className="service-title-details">
                    <h3>{name}</h3>
                    <p><span>Package For: {day}</span></p>
                    <p>BDT <span>{price}</span>/person</p>
                    <Link to={`/servicedetail/${id}`}>
                        <button className="btn btn-info">See Details</button>
                    </Link>
                    <Link to={`/booknow/${id}`}>
                        <button className="btn btn-success float-end">Book Now</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;