import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import whyPeopleImg from '../../Images/signupBG/signup-bg.jpg';
import './About.css';

const About = () => {
    const checkICon = <FontAwesomeIcon icon={faCheckSquare} />
    return (
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>ABOUT US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="why-people-choose-us-setion">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="why-people-choose-img">
                                <img src={whyPeopleImg} className='img-fluid' alt="WHYPEOPLECHOOSEUS" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="why-people-choose-details">
                                <div className="why-people-detail text-start">
                                    <h2>Why people choose us</h2>
                                    <p>OurTrip is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.
                                    </p>
                                </div>
                            </div>
                            <Container fluid>
                                <Row>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-1">{checkICon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>Always online services</h2>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-2">{checkICon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>Instant Operation</h2>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-3">{checkICon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>24/ 7 Support</h2>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} xs={12}>
                                        <div className="why-choose-list d-flex">
                                            <div className="why-choose-icon-4">{checkICon}</div>
                                            <div className="why-choose-list-title">
                                                <h2>Online Booking</h2>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="acheivements-section">
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-one'>149+</h2>
                                <p>World Awards</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-two'>2M+</h2>
                                <p>Happy Clients</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-three'>449+</h2>
                                <p>Expert Team Members</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="achievment-inner">
                                <h2 className='achievment-four'>10K+</h2>
                                <p>Done Operations</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;