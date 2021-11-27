import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slideOne from '../../../Images/carousel/slide-01.jpg';
import slideTwo from '../../../Images/carousel/slide-02.jpg';
import slideThree from '../../../Images/carousel/slide-03.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wonderful Indonesia</h3>
                        <p>10 Hrs Car with Driver Include: English speaking Bali driver, comfortable car with petrol and AC, mineral water and parking tickets.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Land of Gross National Happiness</h3>
                        <p>On arrival at Paro airport, you will be met by our representative and transfer to Thimphu. On the way you will be visiting Bhutan.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideThree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Malaysia...Truly Asia</h3>
                        <p>Breakfast at hotel, pick up from hotel lobby and transfer to KLIA Airport.</p>
                        <Link className='slide-btn' to='/contact'>Contact us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;