import NavBar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

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
                                        Founded in 2005 by pastry chef Emily Turner, <br></br>
                                        Sweet Delights Bakery Began as a small storefront with a passion for quality baking.
                                </div>

                                <div className="about-us-image">

                                </div>
                        </div>

                        <div className="about-us-content image-left">
                                <div className="about-us-text">
                                        Emily's dedication led to a local sensation, <br></br>
                                        known for signature treats like triple chocolate brownies and flaky croissants.
                                </div>

                                <div className="about-us-image">

                                </div>
                        </div>

                        <div className="about-us-banner">
                                <p className="about-us-banner-text">
                                        Deeply rooted in the community, <br></br>
                                        Sweet Delights actively participated in events and fundraisers, become a local favorite.
                                </p>
                        </div>

                        <div className="about-us-content image-left">
                                <div className="about-us-text">
                                        Responding to demand, Sweet Delights moved to a larger space, <br></br>
                                        offering an expanded menu with artisanal bread and custom cakes.
                                </div>

                                <div className="about-us-image">

                                </div>
                        </div>

                        <Footer/>
                </div>
        );
}

export default AboutUs
