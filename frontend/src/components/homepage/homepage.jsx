import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import ProductCarousel from '../cake_display/product_carousel.jsx';
import Menu from '../menu/menu.jsx';

import {Container} from 'react-bootstrap';
import './homepage.css';

function Homepage(){
        return(
                <Container>
                        <Navbar />
                        <ProductCarousel/>
                        <Menu />
                </Container>
        )
}

export default Homepage;