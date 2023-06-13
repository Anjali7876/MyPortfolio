import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

const Hello = () => {
  return (
    <Navbar className="Navbg sticky-top" expand="lg">
    <Container>
       <Navbar.Brand href="#home"><span className="Logo">Er.</span><span id="SubLogo" className="Underlinelogo" > ANJALI</span></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="Navheading">
          <Nav.Link href="#Home" style={{color:"white"}}>HOME</Nav.Link>
          <Nav.Link href="#About" style={{color:"white"}}>ABOUT</Nav.Link>
          <Nav.Link href="#Skill" style={{color:"white"}}>SKILLS</Nav.Link>
          <Nav.Link href="#Work" style={{color:"white"}}>WORK</Nav.Link>
          <Nav.Link href="#Contact" style={{color:"white"}}>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Hello 