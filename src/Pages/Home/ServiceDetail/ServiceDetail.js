import useServices from '../../../hooks/useServices';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    const { services } = useServices({});

    const packages = services.find(service => service.id === parseInt(serviceID));

    return (
        <Container className='my-5'>
            <Row>
                <Row>
                    <Col>
                        <div className="service-title mb-5">
                            <h2>Service Detail</h2>
                        </div>
                    </Col>
                </Row>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-img">
                        <img src={packages?.img} alt="SingleServiceIMG" className='img-fluid' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="single-service-detail text-start">
                        <h3>{packages?.name}</h3>
                        <p>Details:<span>{packages?.desc}</span></p>
                        <h5>Package For: <span>{packages?.day}</span></h5>
                        <h4>BDT <span>{packages?.price}</span>/person</h4>
                        <Link to={`/booknow/${packages?.id}`}>Book Now</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;