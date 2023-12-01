import MapPin from '../assets/map-pin.png';
import CellPhone from '../assets/cellphone.png';
import FaceBook from '../assets/facebook.png';
import Email from '../assets/email.png';

function ContactUsItem({id, contact}) {
    return(
        <section className="contact-us-item">
          <p className="contact-us-item-name">{contact.name}</p>
          <div className="contact-us-divider"></div>

          <section className="contact-us-item-info">
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={MapPin} />
                <span className="text">{contact.address}</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={CellPhone} />
              <span className="text">{contact.contactNo}</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={FaceBook} />
              <span className="text">{contact.fbLink}</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={Email} />
                <span className="text">{contact.email}</span>
            </div>
          </section>
        </section>
    )
}

export default ContactUsItem;
