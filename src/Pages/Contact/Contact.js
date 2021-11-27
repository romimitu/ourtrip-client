import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>Contact US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="why-people-choose-us-setion">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="why-people-choose-details">
                                <div className="why-people-detail text-start">
                                    <h2>Find us</h2>
                                    <p>We are the best of the best, recently we have been on a free seminar
                                        and we got a huge response and also a survey from our beloved clients.
                                    </p>
                                    <iframe title="Office Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.617210693325!2d90.37419487250948!3d23.80762275414849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72a34f84af7%3A0xbbfb4d7be25511a!2sSection%2013%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1633455817919!5m2!1sen!2sbd" width="100%" height="250"  allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Contact;