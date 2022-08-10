import React from 'react'

import './Titlu.css'
import {Button, Container, Row, Col, Image} from 'react-bootstrap'
import imagine1 from '../../../assets/imagine1.png'

const Titlu = () => {
  return (
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
    </Container>
  )
}

export default Titlu