import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Dash360
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#inicio" className="mx-2">Inicio</Nav.Link>
            <Nav.Link href="#contacto" className="mx-2">Contacto</Nav.Link>
            <Button variant="outline-light" href="#ingresar" size="sm" className="ms-2 px-4">
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;