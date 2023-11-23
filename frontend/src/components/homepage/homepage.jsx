import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ProductCarousel from './components/product_carousel/product_carousel.jsx';
import ProductCatalog from './components/product_catalog/home_product_catalog.jsx';

import { useNavigate } from 'react-router-dom';

import './homepage.css';
import { Button } from 'react-bootstrap';
import BallonGirlCake from './assets/balloongirl-nobg.png';

function Homepage() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/products');
  };
  return (
    <>
      <Navbar />

      <div className="carousel-div">
        <ProductCarousel />
      </div>
      <div className="header-divider"></div>

      <section className="home-section white-bg">
        a
      </section>

      <div className="contact-location-info">
        <div className="contact-info">
          <div className="contacts">
            <p className="contact-link" onClick={navigateToContacts}>
              Products
            </p>
            {/* <p className="contact-link" onClick={navigateToContacts}>link/link</p>
                                                <p className="contact-link" onClick={navigateToContacts}>link/link</p> */}
          </div>

          <div className="image-deco">
            <img className="link-image-deco" src={CakeBear} />
          </div>
        </div>

        <div className="location-info">
          <div className="location">
            <p>location location location location</p>
          </div>
        </div>
      </div>

      <div className="feedback">
        <div className="review">
          <h2 className="customer-name">Name</h2>
          Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi vitae mauris
          molestie. Ridiculus leo id donec ac. Rhoncus ditumst at
        </div>

        <div className="review">
          <h2 className="customer-name">Name</h2>
          Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi vitae mauris
          molestie. Ridiculus leo id donec ac. Rhoncus ditumst at
        </div>

        <div className="review">
          <h2 className="customer-name">Name</h2>
          Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi vitae mauris
          molestie. Ridiculus leo id donec ac. Rhoncus ditumst at
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
