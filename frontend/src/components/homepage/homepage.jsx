import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import ProductCarousel from '../cake_display/product_carousel.jsx';
import Menu from '../menu/menu.jsx';

import './homepage.css';

function Homepage(){

        fetch('http://localhost:4000/postProduct', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({name: ''})
        }).then((response) => {
            if(response.ok){
                console.log('Successfully inserted one document');
            } else {
                console.log('Insert one document failed');
            }
        }).catch((err) => {
            console.log(err);
        });

        return(
                <div>
                        <Navbar />
                                <ProductCarousel/>
                        <Menu />
                </div>
        )
}

export default Homepage;
