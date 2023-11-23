import NavBar from '../navbar/navbar.jsx';
import Footer from '../footer/footer.jsx';

import AboutUs1 from './assets/04_About_Us_Photo.jpg';
import AboutUs2 from './assets/05_About_Us_Photo.jpg';
import AboutUs3 from './assets/06_About_Us_Photo.jpg';

import './about_us.css';
function AboutUs() {
  return (
    <>
      <NavBar />

      <section className="about-us-header">About Us</section>
      <div className="header-divider"></div>

      <section className="about-us-section white-bg">
        <div className="about-us-content">
          <p className="about-us-text">
            Founded in 2005 by pastry chef Emily Turner, <br></br>
            Sweet Delights Bakery Began as a small storefront with a passion for
            quality baking.
          </p>
          <div className="about-us-image"></div>
        </div>
      </section>

      <section className="about-us-section gray-bg">
        <div className="about-us-content">
          <div className="about-us-image"></div>

          <p className="about-us-text">
            Emily's dedication led to a local sensation, <br></br>
            known for signature treats like triple chocolate brownies and flaky
            croissants.
          </p>
        </div>
      </section>

      <section className="about-us-section img-bg">
        <div className="about-us-content">
          <p className="about-us-banner-text">
            Deeply rooted in the community, <br></br>
            Sweet Delights actively participated in events and fundraisers,
            become a local favorite.
          </p>
        </div>
      </section>

      <section className="about-us-section gray-bg">
        <div className="about-us-content">
          <div className="about-us-image"></div>

          <div className="about-us-text">
            Responding to demand, Sweet Delights moved to a larger space,{' '}
            <br></br>
            offering an expanded menu with artisanal bread and custom cakes.
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
