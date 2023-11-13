import './contactus.css';
import NavBar from '../navbar/navbar.jsx';

import MapPin from './assets/map-pin.png';
import CellPhone from './assets/cellphone.png';
import FaceBook from './assets/facebook.png';
import Email from './assets/email.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
        const [destLink, setDestLink] = useState('/contactus');

        const getDestLink = (event, destString) => {
                setDestLink('/'.concat(destString));
        }

        const navigate = useNavigate();

        const handleNavigation = () => {
                navigate(destLink);
        }

        const ping = (event, dest) => {
                console.log(event);
                console.log("you clicked: " + dest);
        }

        useEffect(() => {
                // getDestLink();
                console.log((destLink))
                handleNavigation();
        }, [destLink])

        return(
                <div className="contactus-div">
                        <NavBar/>
                        <div className="header-text">
                                Contact Us
                        </div>

                        <div className="about-us-divider">

                        </div>

                        <div className="contact-us-contact-info">
                                <div className="contact-us-owner-info-div">
                                        <div className="contact-us-owner-info">
                                                <div className="contact-us-owner-name">
                                                        Jeannie Ortilla-Tolentino
                                                </div>
                                                <div className="contact-us-line-divider">

                                                </div>
                                                <div className="contact-us-contact-info">
                                                        <div className="contact-us-contact-data">
                                                                <div className="contact-us-social-icon">
                                                                        <img
                                                                                className="contact-us-social-icon-img"
                                                                                src={MapPin}
                                                                        />
                                                                </div>

                                                                <div className="contact-us-social-details">
                                                                                <a className="redirect-link" target="_blank" href="https://www.google.com/maps/place/Chicham's+Sweet+Delight+Cakes+and+Pastries+Shop/@14.3873924,120.9690956,17z/data=!3m1!4b1!4m6!3m5!1s0x3397d38788bc9a23:0xe055952009b1ca36!8m2!3d14.3873873!4d120.9739665!16s%2Fg%2F11mgnbmm8v?entry=ttu">
                                                                                        Molino 4, Bacoor, Cavite
                                                                                </a>
                                                                </div>
                                                        </div>

                                                        <div className="contact-us-contact-data">
                                                                <div className="contact-us-social-icon">
                                                                        <img
                                                                                className="contact-us-social-icon-img"
                                                                                src={CellPhone}
                                                                        />
                                                                </div>

                                                                <div className="contact-us-social-details">
                                                                                0917 825 2905
                                                                </div>
                                                        </div>

                                                        <div className="contact-us-contact-data">
                                                                <div className="contact-us-social-icon">
                                                                        <img
                                                                                className="contact-us-social-icon-img"
                                                                                src={FaceBook}
                                                                        />
                                                                </div>

                                                                <div className="contact-us-social-details">
                                                                        <a target="_blank" className="redirect-link" href='https://www.facebook.com/Chichamsweetdelight'>https://www.facebook.com/Chichamsweetdelight</a>
                                                                </div>
                                                        </div>

                                                        <div className="contact-us-contact-data">
                                                                <div className="contact-us-social-icon">
                                                                        <img
                                                                                className="contact-us-social-icon-img"
                                                                                src={Email}
                                                                        />
                                                                </div>

                                                                <div className="contact-us-social-details">
                                                                        <a href="mailto:jeannie_tolentino@yahoo.com" className="redirect-link">jeannie_tolentino@yahoo.com</a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="contact-us-nav-footer">
                                <div className="contact-us-nav-footer-text">
                                        <div className="contact-us-nav-footer-company-name" onClick={event => getDestLink(event, "")}>
                                                Chicham's Sweet Delight Cakes and Pastries
                                        </div>

                                        <div className="contact-us-nav-footer-nav-options">
                                                <div className="contact-us-options" onClick={event => getDestLink(event, "contactus")}>
                                                        Contact Us
                                                </div>

                                                <div className="contact-us-options" onClick={event => getDestLink(event, "aboutus")}>
                                                        About Us
                                                </div>

                                                <div className="contact-us-options" onClick={event => getDestLink(event, "products")}>
                                                        Products
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

export default ContactUs;
