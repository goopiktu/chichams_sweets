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
  useEffect(() => {

    fetch('http://localhost:4000/getContacts')
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch(error => console.error('Error fetching data:', error));

    console.log('CONTACTS FETCHED!');
  }, []);

  // Assumed: products are stored as objects in array `contacts`
  // Function below maps products to id
        const renderContacts = () => {
          return contacts.map((contact) => (
                  <ContactUsItem key={contact._id} contact={contact}/> // Check component in file product.jsx
          ));
  };

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
        {renderContacts()}
      </section>

      <div className="filler"></div>

      <Footer />
    </div>
  );
}

export default ContactUs;
