import React, { useContext } from 'react'; // 1. Importas useContext
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa'; 
import { ThemeContext } from '../../Context/Theme/ThemeContext'; // 2. Importas tu Contexto

const Menu = () => {
  // 3. Extraes el tema actual del contexto
  const { theme } = useContext(ThemeContext);

  return (
    // 4. Usas theme.variable en lugar de colores fijos
    <Navbar expand="lg" variant={theme.name === 'cyberTech' ? 'dark' : 'light'} className="shadow-sm fixed-top" 
      style={{ backgroundColor: theme.background, borderBottom: `1px solid ${theme.border}` }}>
      
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <FaChartPie className="me-2" size={24} style={{ color: theme.accentGreen }} />
          <span style={{ letterSpacing: '1px', color: theme.primaryText }}>Dash360</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center fw-medium">
            <Nav.Link as={Link} to="/" className="mx-2" style={{ color: theme.secondaryText }}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="mx-2" style={{ color: theme.secondaryText }}>Contacto</Nav.Link>
            
            <Button as={Link} to="/login" size="sm" className="ms-3 px-4 fw-bold text-dark rounded-pill shadow-sm border-0" 
              style={{ backgroundColor: theme.accentGreen }}>
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;