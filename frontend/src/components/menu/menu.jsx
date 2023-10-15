import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardImg from 'react-bootstrap/CardImg';

import './menu.css';

// Samples
import Cake1 from '../cake_display/assets/Estrel1.jpg';

function BasicExample() {
  return (
        <Container id='card_container'>
                <Card className="menu_item">
                        <CardImg
                                src={Cake1}
                                alt={"MenuItem"}
                                className="menu_img"
                        />
                        <Card.Body className="menu_container">
                                <div className="card_title">
                                        NAME
                                </div>

                                <div className="card_desc">
                                        DESCRIPTION
                                </div>

                                <div className="button_container">
                                        <Button className="order_button">Order</Button>
                                </div>
                        </Card.Body>
                </Card>

                <Card className="menu_item">
                        <CardImg
                                src={Cake1}
                                alt={"MenuItem"}
                                className="menu_img"
                        />
                        <Card.Body className="menu_container">
                                <div className="card_title">
                                        NAME
                                </div>

                                <div className="card_desc">
                                        DESCRIPTION
                                </div>

                                <div className="button_container">
                                        <Button className="order_button">Order</Button>
                                </div>
                        </Card.Body>
                </Card>

                <Card className="menu_item">
                        <CardImg
                                src={Cake1}
                                alt={"MenuItem"}
                                className="menu_img"
                        />
                        <Card.Body className="menu_container">
                                <div className="card_title">
                                        NAME
                                </div>

                                <div className="card_desc">
                                        DESCRIPTION
                                </div>

                                <div className="button_container">
                                        <Button className="order_button">Order</Button>
                                </div>
                        </Card.Body>
                </Card>
        </Container>
  );
}

export default BasicExample;
