import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

import appBg from '../../../Images/app.png';
import appStore from '../../../Images/appStore.png';
import playStore from '../../../Images/playStore.png';
import { Col, Container, Row } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <section className="download-apps">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <div className="image">
                                <img src={appBg} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 d-flex align-items-center justify-content-center">
                            <div className="section-content text-center text-sm-left">
                                <h4 className="fw-600">Download ShareTrip App and Earn Trip Coin.</h4>
                                <div className="button-group d-flex align-items-center">
                                    <a href="http://google.com">
                                        <img src={appStore} alt=""/>
                                    </a>
                                    <a href="http://google.com">
                                        <img src={playStore} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
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
        </div>
    );
};

export default Home;