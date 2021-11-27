import React from 'react';
import './NotFound.css';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>            
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>404 NOT FOUND</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NotFound;