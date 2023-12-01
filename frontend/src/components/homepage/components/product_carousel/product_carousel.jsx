// Carousel component for homepage

// Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// CSS
import Carousel from 'react-bootstrap/Carousel';
import './product-carousel.css';

// Banner Images
import Banner1 from './assets/Banner1.png';
import Banner2 from './assets/Banner2.png';

function ProductCarousel() {
  const [index, setIndex] = useState(0);

  // Function to handle selecting in carousel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

        const carouselData =[
                {
                        image: Banner1
                },
                {
                        image: Banner2
                }
        ]

        return(
                <Carousel
                        className="product-carousel"
                        activeIndex={index}
                        onSelect={handleSelect}

                        prevIcon={<FontAwesomeIcon
                        className="carousel-control-icon"
                        icon={faChevronLeft} size='2xl'/>}

                        nextIcon={<FontAwesomeIcon
                        className="carousel-control-icon"
                        icon={faChevronRight} size='2xl'/>}

                        interval={1000}
                >
                        {carouselData.map((slide, i) => {
                                return(
                                        <Carousel.Item className="product-carousel-slide w-100">
                                                <img
                                                                className="carousel-img"
                                                                src={slide.image}
                                                                alt={`${"Image"+i}`}
                                                />

                                                <Carousel.Caption>
                                                        <h3 className="scroll-caption">Scroll down for sweet happiness!</h3>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                )
                        })}
                </Carousel>
        );
}

export default ProductCarousel;
