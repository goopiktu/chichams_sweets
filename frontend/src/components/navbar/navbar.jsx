import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Cake_Icon from '../navbar/navbar_assets/company_logo.png';
import './navbar.css'

function NavigationBar() {

  return (
    <Navbar expand="lg" className="navbar-custom" id='nav_bar'>
      <Container>
        <Navbar.Brand href="#aboutus" className="navbrand-custom">
                {/*Brand - TODO: Insert brand image, placeholder was used*/}
                <img src={Cake_Icon} id="brand_icon" className="border border-dark rounded-circle" height={30} width={30}/>
                Chimcham's Sweet Delights
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                        <Nav className="right-aligned">
                                <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
                                <Nav.Link href="#order" className='fw-bold'>Order</Nav.Link>
                                <Nav.Link href="#aboutus" className='fw-bold'>About Us</Nav.Link>
                                <Nav.Link href="#login" className='fw-bold'>Log in</Nav.Link>
                        </Nav>
                </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
