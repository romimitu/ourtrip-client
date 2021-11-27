import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
            <footer className='foot'>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>About us</h2>
                            </div>
                            <div className="foot-detail-1">
                                <p>OurTrip is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception.</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Quick links</h2>
                            </div>
                            <Navbar variant="light" className="responsive-fix">
                                <Nav className="d-block foot-nav-menu">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/specialist">Our Specialist</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Our Services</h2>
                            </div>
                            <ul className="foot-detail-3">
                                <li>Travel Advisory</li>
                                <li>Holyday Tour</li>
                                <li>Flight</li>
                                <li>Hotel</li>
                                <li>Visa</li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Contact info</h2>
                            </div>
                            <ul className="foot-detail-4">
                                <li>{addIcon} ourtrip st new york ny 10004 United states</li>
                                <li>{envIcon} info@ourtrip.com</li>
                                <li>{phnIcon} +123 - 765 - 7645</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;