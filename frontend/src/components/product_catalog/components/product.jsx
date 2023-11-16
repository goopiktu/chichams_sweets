import './product.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Product({id, product, img}){ // props passed from parent component (FILE: product_catalog.jsx)
        const [formLink, setFormLink] = useState('');
        const [image, setImage] = useState('1.png');

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
                <div className="product-container">
                        <div className="image-div">
                                {/* Image link from object */}
                                {/* Note: I do not know how images work for mongoDB */}
                                <img src={`/images/${product.img}`} height={360} width={360}/>
                        </div>

                        <div className="name-div">
                                {/* Name attribute from object */}
                                {product.name}
                        </div>

                        <div className="cost-div">
                                {/* Cost attribut from object */}
                                ₱{product.price}
                        </div>

                        {/* Order Button, must redirect to form, unsure how to redirect to form (carry data to identify product maybe?) */}
                        <Button onClick={handleNavigation} className="order-button">Order</Button>
                </div>
        );
}

export default Product;
