import React from 'react'


import { Button, Row, Col, Card, Container} from 'react-bootstrap';
import img2 from '../../../assets/img2.png'
import './Cards.css'


const Cards = () => {
  return (
    <Container className='mt-5'>
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
  )
}

export default Cards
