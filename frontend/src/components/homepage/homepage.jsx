import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ProductCarousel from './components/product_carousel.jsx';

import { useNavigate } from 'react-router-dom';

import './homepage.css';

import CakeBear from './assets/Fondant_Cake.png';

function Homepage(){
        const navigate = useNavigate();

        const navigateToContacts = () =>{
                navigate('/contactus')
        }
        return(
                <div className="home-div">
                        <Navbar />
                        <div className="carousel-div">
                                <ProductCarousel/>
                        </div>

                        <div className="homepage-divider">

                        </div>
                        <div className="contact-location-info">
                                <div className="contact-info">
                                        <div className="contacts">
                                                <p className="contact-link" onClick={navigateToContacts}>link/link</p>
                                                <p className="contact-link" onClick={navigateToContacts}>link/link</p>
                                                <p className="contact-link" onClick={navigateToContacts}>link/link</p>
                                        </div>

                                        <div className="image-deco">
                                                <img className="link-image-deco" src={CakeBear}/>
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
