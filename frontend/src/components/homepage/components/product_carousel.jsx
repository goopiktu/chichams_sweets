import Carousel from 'react-bootstrap/Carousel';
import './product-carousel.css';

// banner images
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';

import { useState } from 'react';

function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselData = [
    {
      image: Banner1,
    },
    {
      image: Banner2,
    },
  ];

  return (
    <Carousel
      className="product-carousel"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {carouselData.map((slide, i) => {
        return (
          <Carousel.Item className="product-carousel-slide">
            <img
              className="carousel-img"
              src={slide.image}
              alt="slider image"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProductCarousel;
