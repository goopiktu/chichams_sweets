import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import ProductCarousel from '../cake_display/product_carousel.jsx';
import Menu from '../menu/menu.jsx';

import './homepage.css';

function Homepage(){
        return(
                <div>
                        <Navbar />
                                <ProductCarousel/>
                        <Menu />
                </div>
        )
}

export default Homepage;
