import Navbar from '../navbar/navbar.jsx';
import { Container } from 'react-bootstrap';
import './product_catalog.css';
import Product from '../product_catalog/components/product.jsx';
import { useState, useEffect } from 'react';

// dummy assets
import ApplePie from './assets/apple-pie.jpg';
import BananaPie from './assets/banana-pie.jpg';
import CantaloupePie from './assets/cantaloupe-pie.jpg';
import GuavaPie from './assets/guava-pie.jpg';
import MangoPie from './assets/mango-pie.jpg';
import MongoPie from './assets/mongo-pie.jpg';
import PeachPie from './assets/peach-pie.jpg';

function ProductCatalog(){
        const [products, setProducts] = useState([]);

        useEffect(() => {
                // TODO: Implmement logic for getting product data
                // note: store data to `products` using setProducts(`data`)

                // Dummy-data (for debugging/testing)
                const dummyData = [
                        {id: 1, name: 'Mango Pie', price: 112.3, link: MangoPie},
                        {id: 2, name: 'Apple Pie', price: 13.2, link: ApplePie},
                        {id: 3, name: 'Peach Pie', price: 111.9, link: PeachPie},
                        {id: 4, name: 'Banana Pie', price: 19.99, link: BananaPie},
                        {id: 5, name: 'Guava Pie', price: 19.9, link: GuavaPie},
                        {id: 6, name: 'Cantaloupe Pie', price: 0.99, link: CantaloupePie},
                        {id: 7, name: 'Mongo Beans', price: 9.99, link: MongoPie},
                ];

                setProducts(dummyData); // data is stored to state variable dummyData
        }, []);

        // Assumed: products are stored as objects in array `products`
        // Function below maps products to id
        const renderProducts = () => {
                return products.map((product) => (
                        <Product key={product.id} product={product}/> // Check component in file product.jsx
                ));
        };

        return(
                <div className="product-catalog-div">
                        <Navbar/>

                        <Container className="product-container">
                                <p className="our-products">Our Products</p>

                                <Container className="product-list">
                                        {renderProducts()}
                                </Container>
                        </Container>
                </div>
        );
}

export default ProductCatalog;
