import './footer.css';
import Nav from 'react-bootstrap/Nav';

function Footer() {
        return(
                <div className="footer">
                        <div className="text-container">
                                <div className="title-footer">Chicham's Sweet Delight Cakes and Pastries</div>

                                <div className="navlinks-footer">
                                        <Nav>
                                                <Nav.Link className="navlinks-text" href="/products">Products</Nav.Link>
                                                <Nav.Link className="navlinks-text" href="/AboutUs">About Us</Nav.Link>
                                                <Nav.Link className="navlinks-text" href="/contactus">Contact Us</Nav.Link>
                                        </Nav>
                                </div>
                        </div>
                </div>
        )
}

export default Footer
