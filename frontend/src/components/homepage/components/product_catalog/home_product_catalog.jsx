// Product Catalog for Homepage

// Custom Components
import Product from './components/product/home_product.jsx';

// Dependencies
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CSS
import './home_product_catalog.css';

function ProductCatalog(){
        const [products, setProducts] = useState([]);
        const navigate = useNavigate();

        const handleNavigation = () => {
                navigate('/products')
        }
        useEffect(() => {

                fetch('http://localhost:4000/getProducts')
                        .then((response) => response.json())
                        .then((data) => setProducts(data))
                        .catch(error => console.error('Error fetching data:', error));
        }, []);

        const renderProducts = () => {
                const firstProducts = products.slice(0, 3);

                return firstProducts.map((product) => (
                        <Product key={product._id} product={product}/> // Check component in file product.jsx
                ));
        };
        return(
                <div className="home-product-catalog-div">
                        <div className="home-product-catalog-header">
                                <div className="home-product-title">
                                        Products
                                </div>

                                <div className="see-all" onClick={handleNavigation}>
                                        See all
                                </div>
                        </div>

                        <div className="home-product-catalog">
                                {renderProducts()}
                        </div>
                </div>
        );
}

export default ProductCatalog;
