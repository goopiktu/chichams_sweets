import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Cake_Icon from '../navbar/navbar_assets/company_logo.png';
import './navbar.css'

function NavigationBar() {

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top" id='nav_bar' sticky="top">
      <Container id="nav_container">
        <Navbar.Brand href="/aboutus" id="company_brand">
                {/*Brand - TODO: Insert brand image, placeholder was used*/}
                <img src={Cake_Icon} id="company_logo" className="rounded-circle"/>
                {/* Chimcham's Sweet Delight Cakes and Pastries */}
                <Nav.Link href="/" className='custom_navlink'>Chimcham's Sweet Delight Cakes and Pastries</Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                        <Nav className="nav-options">
                                <Nav.Link href="/" className='custom_navlink'>Home</Nav.Link>
                                <Nav.Link href="/products" className='custom_navlink'>Products</Nav.Link>
                                <Nav.Link href="/aboutus" className='custom_navlink'>About Us</Nav.Link>
                                <Nav.Link href="/contactus" className='custom_navlink'>Contact Us</Nav.Link>
                        </Nav>
                </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
