import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './alert_button.css';

const Alert = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="return-popup">
                <div className="return-content">
                    Order has been placed! <br/>
                    Wait for the owners to respond if they have confirmed your order. <br/>
                    Order Number: 000000
                </div>

                <button className="return-btn" onClick={() => navigate('/')}>
                    Return to Home
                </button>
            </div>
        </>
    )
}

export default Alert;