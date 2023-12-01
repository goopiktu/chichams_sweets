import './contactus.css';
import NavBar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ContactUsItem from './contacus_item/contactus_item.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const [destLink, setDestLink] = useState('/contactus');
  const [contacts, setContacts] = useState([]);

  // Function to get contacts, runs on page render
  // useEffect(() => {

  //   fetch('http://localhost:4000/getProducts')
  //           .then((response) => response.json())
  //           .then((data) => setProducts(data))
  //           .catch(error => console.error('Error fetching data:', error));

  //   console.log('PRODUCTS: ' + products);
  // }, []);

  const getDestLink = (event, destString) => {
    setDestLink('/'.concat(destString));
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(destLink);
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
        <ContactUsItem/>
        <ContactUsItem/>
        <ContactUsItem/>
        <ContactUsItem/>
      </section>

      <div className="filler"></div>

      <Footer />
    </div>
  );
}

export default ContactUs;
