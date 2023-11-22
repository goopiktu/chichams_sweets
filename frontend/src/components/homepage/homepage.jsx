import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ProductCarousel from './components/product_carousel/product_carousel.jsx';
import ProductCatalog from './components/product_catalog/home_product_catalog.jsx';

import { useNavigate } from 'react-router-dom';

import './homepage.css';
import { Button } from 'react-bootstrap';
import BallonGirlCake from './assets/balloongirl-nobg.png';

function Homepage(){
        const navigate = useNavigate();

        const navigateToFeatured = () =>{

                navigate('/form/Fondant Customized Cake')
        }
        return(
                <div className="home-div">
                        <Navbar />
                        <div className="carousel-div">
                                <ProductCarousel/>
                        </div>

                        <div className="homepage-divider">

                        </div>

                        <div className="featured-product">
                                <div className="featured-product-text">
                                        <div className="featured-bold-text">
                                                <p>?</p>
                                        </div>

                                        <div className="featured-bold-text">
                                                <p>Customized Cake</p>
                                        </div>

                                        <div className="featured-bottom-text">
                                                <p>Make your Party Extra Fun with ? Cake</p>
                                        </div>

                                        <Button className="featured-order-button" onClick={navigateToFeatured}>
                                                Order Now
                                        </Button>
                                </div>

                                <div className="featured-product-img">
                                        <img
                                                className="featured-img"
                                                src={BallonGirlCake}
                                        />
                                </div>
                        </div>

                        <div className="homepage-products">
                                <ProductCatalog/>
                        </div>

                        <div className="feedback">
                                <div className="feedback-header">
                                        Sweet Recollections
                                </div>

                                <div className="review">
                                        <h2 className="customer-name">Sweet Tooth Crusader</h2>
                                        Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus ditumst at
                                </div>

                                <div className="review">
                                        <h2 className="customer-name">Name</h2>
                                        Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus ditumst at
                                </div>

                                <div className="review">
                                        <h2 className="customer-name">Name</h2>
                                        Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus ditumst at
                                </div>
                        </div>

                        <Footer/>
                </div>
        )
}

export default Homepage;
