import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './menu.css';

// Samples
import Cake1 from '../cake_display/assets/Estrel1.jpg';
import Cake2 from '../cake_display/assets/Estrel2.jpg';
import Cake3 from '../cake_display/assets/Estrel3.jpg';

function BasicExample() {
  return (
        <Container id='card_container'>
                <Card style={{ width: '25rem' }} className='menu_card'>
                        <Card.Img variant="top" src={Cake1} />
                        <Card.Body>
                                <Card.Title>Sans Rival</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Order</Button>
                        </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className='menu_card'>
                        <Card.Img variant="top" src={Cake2} />
                        <Card.Body>
                                <Card.Title>Mocha Cake</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Order</Button>
                        </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className='menu_card'>
                        <Card.Img variant="top" src={Cake3} />
                        <Card.Body>
                                <Card.Title>Carrot Cake</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Order</Button>
                        </Card.Body>
                </Card>

        </Container>
  );
}

export default BasicExample;
