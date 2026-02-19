import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto border-top">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0 fw-bold text-dark">Dash360</h5>
            <small className="text-muted">© 2026. Data Intelligence.</small>
          </Col>
          
          <Col md={4} className="text-center mb-3 mb-md-0">
            <a href="#inicio" className="text-decoration-none text-secondary mx-2">Inicio</a>
            <a href="#contacto" className="text-decoration-none text-secondary mx-2">Contacto</a>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <span className="text-muted mx-2" style={{cursor: 'pointer'}}>Instagram</span>
            <span className="text-muted mx-2" style={{cursor: 'pointer'}}>Facebook</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;