import './footer.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const [destLink, setDestLink] = useState('');

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
    <div className="footer-container">
      <section className="footer-body">
        <span
          className="footer-company-name"
          onClick={(event) => getDestLink(event, '')}
        >
          Chicham's Sweet Delight Cakes and Pastries
        </span>

        <span className="footer-nav-links">
          <span onClick={(event) => getDestLink(event, 'contactus')}>
            Contact Us
          </span>

          <span onClick={(event) => getDestLink(event, 'aboutus')}>
            About Us
          </span>

          {/* <div className="contact-us-options" onClick={event => getDestLink(event, "products")}>
                                                Products
                                        </div> */}
        </span>
      </section>
    </div>
  );
}

export default Footer;
