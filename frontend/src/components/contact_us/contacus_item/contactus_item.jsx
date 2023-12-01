/* Component for contact information, represents a list of contact details per branch. Includes:
  - Contactperson
  - Address of Branch
  - Contact Details
*/

// Assets
import MapPin from '../assets/map-pin.png';
import CellPhone from '../assets/cellphone.png';
import FaceBook from '../assets/facebook.png';
import Email from '../assets/email.png';
import { useEffect, useState } from 'react';

function ContactUsItem({contact}) {
    // State variable declarations
    // Single quotes enclose default values, currently set to: None
    // To replace, simply replace contents of ''
    // Example: 'String' will set the value to 'String' in the event no data is provided
    const [contactPerson, setContactPerson] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhoneNo, setContactPhoneNo] = useState('');
    const [contactFB, setContactFb] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    // On first render of page, set all data to state variables
    // To handle cases where some fields are empty.
    useEffect(() => {
      setContactPerson(contact.name);
      setContactAddress(contact.address);
      setContactPhoneNo(contact.contactNo);
      setContactFb(contact.fbLink);
      setContactEmail(contact.email);
    }, [])

    return(
        <section className="contact-us-item">
          <p className="contact-us-item-name">{contactPerson}</p>
          <div className="contact-us-divider"></div>

          <section className="contact-us-item-info">
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={MapPin} />
                <span className="text">{contactAddress}</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={CellPhone} />
              <span className="text">{contactPhoneNo}</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={FaceBook} />
              <span className="text">{contactFB}</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={Email} />
                <span className="text">{contactEmail}</span>
            </div>
          </section>
        </section>
    )
}

export default ContactUsItem;
