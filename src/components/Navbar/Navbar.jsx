import React from 'react'

import {Container, Nav, Navbar as NavbarBootStrap} from 'react-bootstrap'
import './Navbar.css'

import logo from '../../assets/logo.png'
import { useAppContext } from '../../containers/Context/Context'



function Navbar({onNavigate}) {

  const { setPath } = useAppContext()

  return (
   
    <NavbarBootStrap onSelect={onNavigate} bg="white" expand="lg" sticky='top' className="square border-bottom">
      <Container>
        <NavbarBootStrap.Brand onClick={()=> {setPath('#homepage')}} href="#homepage">
        <img
              src={logo}
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </NavbarBootStrap.Brand>
        <NavbarBootStrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootStrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {setPath('#reservation')}} href="#reservation">Rezervari</Nav.Link>
            <Nav.Link onClick={()=> {setPath('#myaccount')}} href="#myaccount">Contul meu</Nav.Link>
          </Nav>
        </NavbarBootStrap.Collapse>
      </Container>
    </NavbarBootStrap>
  );
}

export default Navbar;
