import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaDatabase } from 'react-icons/fa';
import { ThemeContext } from '../../Context/Theme/ThemeContext'; // Asegurate de que la ruta esté bien

const Footer = () => {
  // Extraemos el tema actual del contexto
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="py-5 mt-auto" style={{ backgroundColor: theme.headerBackground, borderTop: `1px solid ${theme.border}` }}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            {/* El logo toma el color verde/acento 1 */}
            <h5 className="mb-1 fw-bold" style={{ color: theme.accentGreen }}>Dash360</h5>
            <small style={{ color: theme.secondaryText }}>
              {/* El icono de base de datos toma el color cian/acento 2 */}
              Potenciando decisiones con <FaDatabase className="mx-1" style={{ color: theme.accentBlue }} /> datos puros.
            </small>
          </Col>
          
          <Col md={4} className="text-center mb-4 mb-md-0">
            {/* Los enlaces toman el color secundario del texto */}
            <Link to="/" className="text-decoration-none mx-3" style={{ color: theme.secondaryText, transition: 'color 0.3s' }} 
                  onMouseEnter={(e) => e.target.style.color = theme.primaryText} 
                  onMouseLeave={(e) => e.target.style.color = theme.secondaryText}>
              Inicio
            </Link>
            <Link to="/contacto" className="text-decoration-none mx-3" style={{ color: theme.secondaryText, transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = theme.primaryText} 
                  onMouseLeave={(e) => e.target.style.color = theme.secondaryText}>
              Contacto
            </Link>
          </Col>

          {/* Iconos corregidos usando currentTarget y colores del tema */}
          <Col md={4} className="text-center text-md-end d-flex justify-content-center justify-content-md-end gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              title="Instagram"
              style={{ color: theme.secondaryText, transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme.accentGreen}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.secondaryText}
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              title="Facebook"
              style={{ color: theme.secondaryText, transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme.accentBlue}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.secondaryText}
            >
              <FaFacebook size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;