import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../components/images/banner.png'
import img2 from '../components/images/gym_dark4.jpg'
import img3 from '../components/images/barbel.jpg'

const Slider = () => {
    return (
        
        <Carousel controls="false" fade="true" pause="false">
            <Carousel.Item interval={2000}>
            <img
                width={900} height={800}
                className="d-block w-100"
                src={img1}
                alt="First slide"
                 />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
                <img
                    width={900} height={800}                
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide" />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    width={900} height={800}                
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide" />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;