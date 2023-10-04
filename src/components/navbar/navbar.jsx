import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Cake_Icon from '../navbar/navbar_assets/cake_icon.png';
import './navbar.css'

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='nav_bar'>
      <Container>
        <Navbar.Brand href="#aboutus">
                {/*Brand - TODO: Insert brand image, placeholder was used*/}
                <img src={Cake_Icon} className="border border-dark rounded-circle" height={30} width={30}/>
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
