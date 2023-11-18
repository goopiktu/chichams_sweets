import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import './receipt.css';

import { useNavigate, useLocation } from 'react-router-dom';
import {useState} from 'react';

const Receipt = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const c_info = location.state?.formData || {};

    const [formData, setFormData] = useState(c_info || {});
    const [productImg, setProductImg] = useState(formData.productImg || {});

    console.log(c_info.dateOrdered);

    const handleEditOrder = () => {
        setFormData(c_info);
        navigate('/edit'.concat('/').concat(c_info.productName), {state:  {formData}});
    }

    const handleConfirmOrder = (e) => {
        e.preventDefault();

        const orderData = {
            productName: c_info.productName,
            name: c_info.name,
            contactNo: c_info.contactNo,
            email: c_info.email,
            fbLink: c_info.fbLink,
            mode: c_info.mode,
            dedication: c_info.dedication,
            orderDes: c_info.orderDes,
            address: c_info.address,
            dateOrdered: c_info.dateOrdered,
            datePickup: c_info.datePickup,
            // image: c_info.image
        }

        console.log(orderData);

        fetch('http://localhost:4000/postOrder', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })

            .then((response) => {
            if (response.ok) {
                console.log('Successfully inserted one document');
                navigate('/');
            } else {
                console.error('Insert one document failed');
            }
            })
            .catch((error) => {
            console.error('An error occurred: ', error);
            });
    }

    return (
        <div>
            <Navbar />

            <div className="App">
                <div className="product-selection">
                    <div className="pimg-container">
                        <img className="product-img" src={`/images/1.png`} alt="product-picture" />
                    </div>
                </div>

                <div className="order-container">
                    <div className="order-form">
                        <div className="name-receipt">
                            <div id="product-name">{c_info.productName}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Date</div>

                            <div className="date-input">{new Date(c_info.dateOrdered).toLocaleDateString()}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Name</div>

                            <div className="info-input">{c_info.name}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Contact Number</div>

                            <div className="info-input">{c_info.contactNo}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Email</div>

                            <div className="info-input">{c_info.email}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Facebook Link</div>

                            <div className="info-input">{c_info.fbLink}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Delivery Option</div>

                            <div className="info-input">{c_info.mode}</div>
                            <div className="info-input">{c_info.address} </div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Dedication</div>

                            <div className="info-input">{c_info.dedication}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Other Notes</div>

                            <div className="info-input">{c_info.orderDes}</div>

                            {/* Image Upload Here */}
                        </div>

                    </div>
                        
                    <button className="submit-button" id="edit-button" onClick={handleEditOrder}>Edit Order</button>

                    <button className="submit-button" id="confirm-button" onClick={handleConfirmOrder}>Confirm Order</button>
                </div>
                {/* <div>
                            <img src={c_info.image} alt=""  style={{ width: '300px', height: '200px' }}/>
                </div> */}
            </div>
        </div>
    );
}

export default Receipt;