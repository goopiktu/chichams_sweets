import NavBar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

import AboutUs1 from './assets/04_About_Us_Photo.jpg';
import AboutUs2 from './assets/05_About_Us_Photo.jpg';
import AboutUs3 from './assets/06_About_Us_Photo.jpg';

import './about_us.css';
function AboutUs(){
        return(
                <div className="about-us-div">
                        <NavBar/>
                        <div className="about-us-header">
                                About Us
                        </div>

                        <div className="about-us-divider">

                        </div>

                        <div className="about-us-content image-right">
                                <div className="about-us-text">
                                        Jeannie O. Tolentino established Chicham’s Sweet Delight Cakes and Pastries in 2015, She
                                        started baking various goods, pastries, and cakes to satisfy customers' taste buds.
                                </div>

                                <div className="about-us-image">
                                        <img
                                                className="about-us-img"
                                                src={AboutUs1}
                                        />
                                </div>
                        </div>

                        <div className="about-us-content image-left">
                                <div className="about-us-text">
                                        Chicham, from then on, started delivering and making customized cakes and pastries that truly
                                        satisfy the customers. They started joining bazaars to showcase their products.
                                </div>

                                <div className="about-us-image">
                                        <img
                                                className="about-us-img"
                                                src={AboutUs2}
                                        />
                                </div>
                        </div>

                        <div className="about-us-content image-right">
                                <div className="about-us-text">
                                        “Make your occasion a day to remember… Because every cake has a story to tell” <br></br>
                                        - Jeannie O. Tolentino
                                </div>

                                <div className="about-us-image">
                                        <img
                                                className="about-us-img"
                                                src={AboutUs3}
                                        />
                                </div>
                        </div>

                        <div className="about-us-banner">
                                <p className="about-us-banner-text">

                                </p>
                        </div>

                        <Footer/>
                </div>
        );
}

export default AboutUs
