import React from 'react';

import Navbar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ReturnPopup from './alert_popup/alert_button.jsx';
import './receipt.css';
import { CSSTransition } from 'react-transition-group';

import { useNavigate, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

const Receipt = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const c_info = location.state?.formData || {};

    const [formData, setFormData] = useState(c_info || {});
    const [productImg, setProductImg] = useState(formData.productImg || {});
    const [orderNum, setOrderNum] = useState('');
    const [popup, showPopup] = useState(false);

    useEffect(() => {
        console.log("CINFO is: " + c_info.productImg.img);
        console.log("formdata is: " + formData.productImg.img);
    }, [])

    const handleEditOrder = () => {
        setFormData(c_info);

        navigate('/edit'.concat('/').concat(c_info.productName), {state:  {formData}});
    }
    


    const generateOrderID = () => {
        const date = new Date(c_info.dateOrdered);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
       
        const hexadecimalPhoneNumber = Number(c_info.contactNo).toString(16);
        
        const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();

        const orderID = `${month}${day}${year}${hexadecimalPhoneNumber.toUpperCase()}${randomString}`;
      
        return orderID;
    };

    const showAlert = (orderNum) => {
        showPopup(true);
    }
    

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        
        const ordernum = generateOrderID();

        const orderData = {
            orderNum: ordernum,
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
            img: `/images/${productImg.img}`
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
                // navigate('/');
                showAlert(orderData.orderNum);
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

            {popup && <ReturnPopup className={`popup-fade-in ${popup ? 'show' : ''}`} />}

            <div className="receipt-div">
                <div className="product-selection">
                    <div className="pimg-container">
                        <img className="product-img" src={`/images/${productImg.img}`} alt="product-picture" />
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
