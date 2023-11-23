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
          Jeannie O. Tolentino established Chicham’s Sweet Delight Cakes and Pastries in 2015.
          She started baking various goods, pastries, and cakes to satisfy customers' taste buds.
          </p>
          <div className="about-us-image-1"></div>
        </div>
      </section>

      <section className="about-us-section gray-bg">
        <div className="about-us-content">
          <div className="about-us-image-2"></div>

          <p className="about-us-text">
          Chicham, from then on, started delivering and making customized cakes and pastries that truly satisfy the customers.
          They started joining bazaars to showcase their products.
          </p>
        </div>
      </section>

      <section className="about-us-section white-bg">
        <div className="about-us-content">
          <p className="about-us-text">
          “Make your occasion a day to remember… Because every cake has a story to tell” <br></br>
          - Jeannie O. Tolentino
          </p>
          <div className="about-us-image-3"></div>
        </div>
      </section>

      <section className="about-us-section img-bg">
        <div className="about-us-content">

        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
