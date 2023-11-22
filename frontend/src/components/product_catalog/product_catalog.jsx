import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import './product_catalog.css';
import Product from './components/product/product.jsx';
import { useState, useEffect } from 'react';

function ProductCatalog(){
        const [products, setProducts] = useState([]);

        useEffect(() => {

                fetch('http://localhost:4000/getProducts')
                        .then((response) => response.json())
                        .then((data) => setProducts(data))
                        .catch(error => console.error('Error fetching data:', error));

                console.log('PRODUCTS: ' + products);
        }, []);


        // Assumed: products are stored as objects in array `products`
        // Function below maps products to id
        const renderProducts = () => {
                return products.map((product) => (
                        <Product key={product._id} product={product}/> // Check component in file product.jsx
                ));
        };

        return(
                <div className="product-catalog-div">
                        <Navbar/>

                        <div className="product-header-div">
                                Our Products
                        </div>

                        <div className="product-item-list-div">
                                {renderProducts()}
                        </div>

                        <Footer/>
                </div>
        );
}

export default ProductCatalog;
