import './home_product_catalog.css';
import Product from './components/product/home_product.jsx';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import { Link, useNavigate } from 'react-router-dom';

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

        // Only first 3 products
        const renderProducts = () => {
                const firstProducts = products.slice(0, 3);

                return firstProducts.map((product) => (
                        <Product key={product._id} product={product}/> // Check component in file product.jsx
                ));
        };
        return(
                <div className="home-product-catalog-div">
                        <Container className="home-product-catalog-header">
                                <div className="home-product-title-header">
                                        Products
                                </div>

                                <div className="see-all" onClick={handleNavigation}>
                                        See all
                                </div>
                        </Container>

                        <Container className="home-product-container">
                                {renderProducts()}
                        </Container>
                </div>
        );
}

export default ProductCatalog;
