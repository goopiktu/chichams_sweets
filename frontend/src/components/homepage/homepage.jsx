import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ProductCarousel from './components/product_carousel/product_carousel.jsx';
import ProductCatalog from './components/product_catalog/home_product_catalog.jsx';

import { useNavigate } from 'react-router-dom';

import './homepage.css';

import CakeBear from './assets/Fondant_Cake.png';

function Homepage(){
        const navigate = useNavigate();

        const navigateToContacts = () =>{
                //remove after use: {deletes all record in a collection}

                // fetch('http://localhost:4000/deleteOrders')
                //         .then((response) => {
                //                 if(response.ok){
                //                         console.log('Deleting Orders Successful!');
                //                 } else{
                //                         console.log('Deleting Orders Failed!');
                //                 }
                //         })
                //         .catch((err) => {
                //                 console.log('An error occurred: ', err);
                //         });

                navigate('/products')
        }
        return(
                <div className="home-div">
                        <Navbar />
                        <div className="carousel-div">
                                <ProductCarousel/>
                        </div>

                        <div className="homepage-divider">

                        </div>

                        <div className="homepage-products">
                                <ProductCatalog/>
                        </div>

                        <div className="feedback">
                                <div className="feedback-header">
                                        Sweet Recollections
                                </div>

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
