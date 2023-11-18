import './contactus.css';
import NavBar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';

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
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(destLink);
  };

  const ping = (event, dest) => {
    console.log(event);
    console.log('you clicked: ' + dest);
  };

  useEffect(() => {
    // getDestLink();
    console.log(destLink);
    handleNavigation();
  }, [destLink]);

  return (
    <div className="contact-us">
      <NavBar />

      <section className="contact-us-header">Contact Us</section>
      <div className="header-divider"></div>

      <section className="contact-us-body">
        <section className="contact-us-item">
          <p className="contact-us-item-name">Jeannie Ortilla-Tolentino</p>
          <div className="contact-us-divider"></div>

          <section className="contact-us-item-info">
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={MapPin} />
              <a
                className="redirect-link"
                target="_blank"
                href="https://www.google.com/maps/place/Chicham's+Sweet+Delight+Cakes+and+Pastries+Shop/@14.3873924,120.9690956,17z/data=!3m1!4b1!4m6!3m5!1s0x3397d38788bc9a23:0xe055952009b1ca36!8m2!3d14.3873873!4d120.9739665!16s%2Fg%2F11mgnbmm8v?entry=ttu"
              >
                Molino 4, Bacoor, Cavite
              </a>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={CellPhone} />
              <span className="text">0917 825 2905</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={FaceBook} />
              <a
                target="_blank"
                className="redirect-link"
                href="https://www.facebook.com/Chichamsweetdelight"
              >
                https://www.facebook.com/Chichamsweetdelight
              </a>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={Email} />
              <a
                href="mailto:jeannie_tolentino@yahoo.com"
                className="redirect-link"
              >
                jeannie_tolentino@yahoo.com
              </a>
            </div>
          </section>
        </section>
      </section>

      <div className="filler"></div>

      <Footer />
    </div>
  );
}

export default ContactUs;
