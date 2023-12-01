import MapPin from '../assets/map-pin.png';
import CellPhone from '../assets/cellphone.png';
import FaceBook from '../assets/facebook.png';
import Email from '../assets/email.png';

function ContactUsItem() {
    return(
        <section className="contact-us-item">
          <p className="contact-us-item-name">Jeannie Ortilla-Tolentino</p>
          <div className="contact-us-divider"></div>

          <section className="contact-us-item-info">
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={MapPin} />
                <span className="text">Molino 4, Bacoor, Cavite</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={CellPhone} />
              <span className="text">0917 825 2905</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={FaceBook} />
              <span className="text">https://www.facebook.com/Chichamsweetdelight</span>
            </div>
            <div className="contact-us-item-detail">
              <img className="contact-us-icon" alt="" src={Email} />
                <span className="text">jeannie_tolentino@yahoo.com</span>
            </div>
          </section>
        </section>
    )
}

export default ContactUsItem;
