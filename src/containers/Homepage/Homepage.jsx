import React from 'react'
import { Button, Row, Col, Card, Container, Image} from 'react-bootstrap';
import img2 from '../../assets/img2.png'
import imagine1 from '../../assets/imagine1.png'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
    <Container>
      <Row className='row align-items-center'>
        <Col>
        <h1 className='text1'>Alege din restaurantele tale preferate!</h1>
        <Button variant="primary" className='mt-4 buton'>Rezerva acum!</Button>{' '}
        </Col>
        <Col>
        <Image src={imagine1} alt='imagine1' fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 >Restaurante</h1>
        </Col>
      </Row>

      <Row>
        <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Rezerva acum</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Homepage