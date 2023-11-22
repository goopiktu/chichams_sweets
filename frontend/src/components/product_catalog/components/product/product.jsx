import './product.css';
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

                        {/* <div className="desc-div">

                        </div> */}

                        <div className="cost-div">
                                {/* Cost attribut from object */}
                                Starts at ₱{product.price}
                        </div>

                        {/* Order Button, must redirect to form, unsure how to redirect to form (carry data to identify product maybe?) */}
                        <Button onClick={handleNavigation} className="order-button">Order</Button>

                        {showDesc ? <PopupDesc productName={product.name}/> : null}
                </div>
        );
}

export default Product;
