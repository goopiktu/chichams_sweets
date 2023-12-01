// Function that handles rendering of each product

// Custom Components

// Dependencies
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// CSS
import './product.css';

// Props:
// id - product id
// product - object representing an object
// img - presence of display
function Product({id, product, img}){
        const [formLink, setFormLink] = useState('');
        const [showDesc, setShowDesc] = useState(false);

        const toggleProductDesc = () => {
                setShowDesc(!showDesc);
        }

        const getFormLink = () =>{
                setFormLink('/form'.concat('/').concat(product.name));
        }

        const navigate = useNavigate();

        const handleNavigation = () => {
                navigate(formLink)
        }

        // Function to get link to form, runs on component render
        useEffect(() => {
                getFormLink();
        }, [])

        return(
                <div className="product-container">

                        <div className="image-div">
                                <img
                                        className="product-image"
                                        src={`/images/${product.img}`}
                                        onClick={toggleProductDesc}
                                />
                        </div>

                        <div className="name-div">
                                {/* Name attribute from object */}
                                {product.name}
                        </div>

                        <div className="desc-div">
                                {/* Product description to be added here, field needed in Product object */}
                        </div>

                        <div className="cost-div">
                                {/* Cost attribut from object */}
                                Starts at ₱{product.price}
                        </div>

                        {/* Order Button, must redirect to form, unsure how to redirect to form (carry data to identify product maybe?) */}
                        <Button onClick={handleNavigation} className="order-button">Order</Button>
                </div>
        );
}

export default Product;
