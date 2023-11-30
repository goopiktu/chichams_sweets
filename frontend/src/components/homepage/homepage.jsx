import React from 'react';

import { useEffect } from 'react';
 
import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ProductCarousel from './components/product_carousel/product_carousel.jsx';
import ProductCatalog from './components/product_catalog/home_product_catalog.jsx';

import { useNavigate } from 'react-router-dom';

import './homepage.css';
import { Button } from 'react-bootstrap';
import BallonGirlCake from './assets/balloongirl-nobg.png';

import CakeBear from './assets/Fondant_Cake.png';

function Homepage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('http://localhost:4000/deleteOrders')
  //     .then((response) => {
  //       if(response.ok){
  //         console.log('Delete Successful!');
  //       } else{
  //         console.log('Error Delete!');
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // })

  const navigateToFeaturedProduct = () => {
    navigate('/form/Fondant Customized Cake');
  };
  return (
    <>
    <Navbar />
    <div className="homepage-div">

      <div className="carousel-div">
        <ProductCarousel />
      </div>
      <div className="header-divider"></div>

      <section className="home-section white-bg">
        <div className="featured-product-info">
          <div className="featured-product-name">Fondant <br></br> Customized Cake</div>
          <div className="featured-product-desc">Make your Party Extra Fun with Fondant Cake</div>
          <Button className="featured-product-order-button" onClick={navigateToFeaturedProduct}>Order Now</Button>
        </div>

        <div className="featured-product-image">

        </div>
      </section>

      <div className="homepage-products">
        <ProductCatalog/>
      </div>

      <div className="feedback">
        <div className="feedback-header">
          Sweet Recollections
        </div>
        <div className="review">
          <h2 className="customer-name">Anonymous</h2>
          Sarap ng carrot cake, sis! Sobrang moist and soft!!! Even the kids like it!
        </div>

        <div className="review">
          <h2 className="customer-name">Anonymous</h2>
          Ang sarap nagustuhan po ng mga kids. Sobrang moist ng banana bread. Sakto po yung tamis, sara na sarap!
        </div>

        <div className="review">
          <h2 className="customer-name">Anonymous</h2>
          Thank you po sa cake! Perfect yung pagkakagawa.
        </div>

        <div className="review">
          <h2 className="customer-name">Anonymous</h2>
          Thank you for the cake. We love it, masarap! Even the icing.
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}

export default Homepage;
