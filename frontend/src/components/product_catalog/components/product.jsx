import './product.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Product({id, product}){ // props passed from parent component (FILE: product_catalog.jsx)
        return(
                <div className="product-container">
                        <div className="image-div">
                                {/* Image link from object */}
                                {/* Note: I do not know how images work for mongoDB */}
                                <img src={product.link} height={360} width={360}/>
                        </div>

                        <div className="name-div">
                                {/* Name attribute from object */}
                                {product.name}
                        </div>

                        <div className="cost-div">
                                {/* Cost attribut from object */}
                                {product.price}
                        </div>

                        {/* Order Button, must redirect to form, unsure how to redirect to form (carry data to identify product maybe?) */}
                        <Link to={"/form"}><Button className="order-button">Order</Button></Link>
                </div>
        );
}

export default Product;
