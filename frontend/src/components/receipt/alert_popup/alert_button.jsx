import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './alert_button.css';

const Alert = ({ orderNum }) => {

    const navigate = useNavigate();

    // const [orders, setOrders] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:4000/getOrders')
    //         .then((response) => response.json())
    //         .then((data) => setOrders(data))
    //         .catch((err) => console.error(err));
    // })

    return (
        <>
            <div className="return-popup">
                <div className="return-content">
                    Order has been placed! <br/>
                    Wait for the owners to respond if they have confirmed your order. <br/>
                    Order Number: { orderNum }
                </div>

                <button className="return-btn" onClick={() => navigate('/')}>
                    Return to Home
                </button>
            </div>
        </>
    )
}

export default Alert;