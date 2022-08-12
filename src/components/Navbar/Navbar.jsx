import React from 'react'

import {Container, Nav, Navbar} from 'react-bootstrap'
import './Navbar.css'

import logo from '../../assets/logo.png'



function Header() {
  return (
   
    <Navbar bg="white" expand="lg" sticky='top' className="square border-bottom">
      <Container>
        <Navbar.Brand href='#home'>
        <img
              src={logo}
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='#rezervari'>Rezervari</Nav.Link>
            <Nav.Link href='#contul_meu'>Contul meu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
