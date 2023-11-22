import './home_product.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import PopupDesc from '../popup-desc/popupDesc.jsx';

function Product({id, product, img}){ // props passed from parent component (FILE: product_catalog.jsx)
        const [formLink, setFormLink] = useState('');
        const [showDesc, setShowDesc] = useState(false);

        const toggleProductDesc = () => {
                setShowDesc(!showDesc);
                console.log(showDesc);
        }

        const getFormLink = () =>{
                setFormLink('/form'.concat('/').concat(product.name));
        }

        const navigate = useNavigate();

        const handleNavigation = () => {
                navigate(formLink)
        }

        useEffect(() => {
                getFormLink();
        })

        return(
                <div className="home_product-container">

                        <div className="home-image-div">
                                <img
                                        className="product-image"
                                        src={`/images/${product.img}`}
                                        height={360}
                                        width={360}
                                        onClick={toggleProductDesc}
                                />
                        </div>

                        <div className="home-name-div">
                                {product.name}
                        </div>

                        <div className="home-cost-div">
                                ₱{product.price}
                        </div>

                        <Button onClick={handleNavigation} className="order-button">Order</Button>
                </div>
        );
}

export default Product;
