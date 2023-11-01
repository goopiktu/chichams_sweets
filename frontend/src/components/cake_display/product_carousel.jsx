import React from 'react';
import {Carousel} from 'react-bootstrap';
// Samples
import Cake1 from './assets/Estrel1.jpg';
import Cake2 from './assets/Estrel2.jpg';
import Cake3 from './assets/Estrel3.jpg';
import Cake4 from './assets/Estrel4.jpg';

import './product_display.css'

const ProductCarousel = () => {
    return (
        <div id='carousel_container'>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 product_img"
                        src={Cake1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 product_img"
                        src={Cake2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 product_img"
                        src={Cake3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className=" w-100 product_img"
                        src={Cake4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ProductCarousel
