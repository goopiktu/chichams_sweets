import './footer.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
        const [destLink, setDestLink] = useState('');

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

                                        {/* <div className="contact-us-options" onClick={event => getDestLink(event, "products")}>
                                                Products
                                        </div> */}
                                </div>
                        </div>
                </div>
        )
}

export default Footer
