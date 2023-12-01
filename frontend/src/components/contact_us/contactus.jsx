// Component for layout of "Contact Us" page

// Custom Components
import NavBar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import ContactUsItem from './contacus_item/contactus_item.jsx';

// Dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './contactus.css';

function ContactUs() {
  const [destLink, setDestLink] = useState('/contactus');
  const [contacts, setContacts] = useState([]);

  // Function to get contacts, runs on page render
  useEffect(() => {

    fetch('http://localhost:4000/getContacts')
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Assumed: contacts are stored as objects in array `contacts`
  // Function below maps contacts to id
        const renderContacts = () => {
          return contacts.map((contact) => (
                  <ContactUsItem key={contact._id} contact={contact}/> // Check component in file product.jsx
          ));
  };

  // Function to get destination link, for redirect purposes
  const getDestLink = (event, destString) => {
    setDestLink('/'.concat(destString));
  };

  const navigate = useNavigate();

  // Function responsible for handling the navigation
  const handleNavigation = () => {
    navigate(destLink);
  };

  // Every time state variable "destLink" is updated, function "handleNavigation" is run
  useEffect(() => {

    handleNavigation();
  }, [destLink]);

  return (
    <div className="contact-us">
      <NavBar />

      <section className="contact-us-header">Contact Us</section>
      <div className="header-divider"></div>

      <section className="contact-us-body">
        {/* Function call to render contact details */}
        {renderContacts()}
      </section>

      <div className="filler"></div>

      <Footer />
    </div>
  );
}

export default ContactUs;
