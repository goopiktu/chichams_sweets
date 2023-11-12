import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import './receipt.css';

import { useNavigate, useLocation } from 'react-router-dom';

const Receipt = () => {
    const navigate = useNavigate();

    const {state} = useLocation();
    const c_info = state && state.formData;

    const handleEditOrder = () => {
        navigate('/form'.concat('/').concat(c_info.productName));
    }

    const handleConfirmOrder = (e) => {

        e.preventDefault();

        const orderData = {
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
                    <div className="product-img"></div>
                </div>

                <div className="order-container">
                    <div className="order-form">
                        <div className="name-receipt">
                            <div id="product-name">{c_info.productName}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Date</div>

                            <div className="date-input">{c_info.dateOrdered}</div>
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
                            <div className="text-receipt">Facebook Link</div>

                            <div className="info-input">{c_info.fbLink}</div>
                        </div>

                        <div className="title-receipt">
                            <div className="text-receipt">Delivery Option</div>

                            <div className="info-input">{c_info.mode}</div>
                        </div>

                        <div className="title-receipt" id="desc-receipt">
                            <div className="text-receipt">Order Description</div>

                            <div className="info-input">{c_info.orderDes}</div>
                        </div>

                        

                        
                    </div>
                        
                    <button className="submit-button" id="edit-button" onClick={handleEditOrder}>Edit Order</button>

                    <button className="submit-button" id="confirm-button" onClick={handleConfirmOrder}>Confirm Order</button>
                </div>
                <div>
                            <img src={c_info.image} alt=""  style={{ width: '300px', height: '200px' }}/>
                </div>
            </div>
        </div>
    );
}

export default Receipt;