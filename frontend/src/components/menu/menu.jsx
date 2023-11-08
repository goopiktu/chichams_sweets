import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardImg from 'react-bootstrap/CardImg';

import './menu.css';

// Samples
import Cake1 from '../cake_display/assets/Estrel1.jpg';

function BasicExample() {

        {/* Get the name and image directly from database */}
        const products = [
                {img: Cake1, name: 'NAME1', desc: 'DESC1'},
                {img: Cake1, name: 'NAME2', desc: 'DESC2'},
                {img: Cake1, name: 'NAME3', desc: 'DESC3'},
                {img: Cake1, name: 'NAME4', desc: 'DESC4'},
                {img: Cake1, name: 'NAME5', desc: 'DESC5'}
        ];

  return (
        <Container id='card_container'>
                {/* TODO: Loop product catalogs here */}

                {products.map(item => (
                        <Card className="menu_item">
                                <CardImg
                                        src={item.img}
                                        alt={"MenuItem"}
                                        className="menu_img"
                                />

                                <Card.Body className="menu_container">
                                        <div className="card_title">
                                                {item.name}
                                        </div>

                                        <div className="card_desc">
                                                {item.desc}
                                        </div>

                                        <div className="button_container">
                                                <Button className="order_button">Order</Button>
                                        </div>
                                </Card.Body>
                        </Card>       
                ))}
        </Container>
  );
}

export default BasicExample;
