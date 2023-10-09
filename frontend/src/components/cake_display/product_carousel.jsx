import React from 'react';
import {Carousel} from 'react-bootstrap';

// Samples
import Cake1 from './assets/Estrel1.jpg';
import Cake2 from './assets/Estrel2.jpg';
import Cake3 from './assets/Estrel3.jpg';
import Cake4 from './assets/Estrel4.jpg';

const ProductCarousel = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Cake1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Cake2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Cake3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Cake4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ProductCarousel
