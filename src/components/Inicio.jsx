import React, { useContext } from 'react'; // 1. Importar useContext
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCloudUploadAlt, FaPlug, FaChartArea } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContext'; // 2. Importar tu Contexto

const Inicio = () => {
  // 3. Extraer el tema del contexto
  const { theme } = useContext(ThemeContext);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: theme.background }}>

      <div 
        className="text-white pt-5 pb-5 mt-5 shadow-sm"
        // Usamos template literals para inyectar los colores del tema en el gradiente
        style={{ background: `linear-gradient(135deg, ${theme.background} 0%, ${theme.cardBackground} 50%, #064e3b 100%)` }}
      >
        <Container className="py-5 mt-4">
          <Row className="align-items-center">
            <Col lg={7} className="mb-5 mb-lg-0">
              <p className="mb-3 px-3 py-2 rounded-pill fw-bold border w-50 text-center" 
                     style={{ backgroundColor: theme.headerBackground, color: theme.accentGreen }}>
                Plataforma de Data Analytics
              </p>
              <h1 className="display-4 fw-extrabold mb-4" style={{ fontWeight: '900', color: theme.primaryText }}>
                Dale vida a tus <span style={{ color: theme.accentGreen }}>datos</span>.
              </h1>
              <p className="lead mb-4 pe-lg-5" style={{ color: theme.secondaryText }}>
                Dash360 transforma grandes volúmenes de información en visualizaciones claras y accionables. Conecta tus fuentes en segundos y toma decisiones basadas en evidencia.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/login" size="lg" className="px-4 fw-bold rounded-pill text-dark border-0 shadow" 
                        style={{ backgroundColor: theme.accentGreen }}>
                  Empezar ahora
                </Button>
                <Button variant="outline-light" size="lg" className="px-4 rounded-pill fw-medium"
                        style={{ borderColor: theme.secondaryText }}>
                  Ver demostración
                </Button>
              </div>
            </Col>
            
            <Col lg={5} className="d-none d-lg-flex justify-content-center">
              <div className="p-5 rounded-4 shadow-lg border d-flex flex-column align-items-center w-100" 
                   style={{ maxWidth: '420px', backgroundColor: theme.cardBackground, borderColor: theme.border }}>
                  <FaChartArea color={theme.accentBlue} size={110} className="mb-4 opacity-75" />
                  <h4 className="fw-bold mb-4" style={{ color: theme.primaryText }}>Procesamiento en Tiempo Real</h4>
                  <div className="progress w-100 shadow-sm" style={{ height: '8px', backgroundColor: theme.background }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: theme.accentBlue }}></div>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5 py-5 flex-grow-1">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: theme.primaryText }}>Elegí tu método de conexión</h2>
          <p className="fs-5" style={{ color: theme.secondaryText }}>Flexibilidad absoluta para tus fuentes de información.</p>
        </div>

        <Row className="g-4 justify-content-center">
          <Col md={5}>
            <Card className="h-100 shadow-sm border-0 rounded-4 transition-all" style={{ backgroundColor: theme.cardBackground }}>
              <Card.Body className="p-5 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex p-4 rounded-circle" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}>
                    <FaPlug size={40} color={theme.accentBlue} />
                  </div>
                </div>
                <Card.Title as="h3" className="fw-bold mb-3" style={{ color: theme.primaryText }}>Conexión API</Card.Title>
                <Card.Text className="mb-4" style={{ color: theme.secondaryText }}>
                  Sincronización bidireccional en tiempo real. Configura tus Endpoints y deja que nosotros procesemos la data.
                </Card.Text>
                <Button className="rounded-pill px-4 fw-semibold" 
                        style={{ backgroundColor: 'transparent', color: theme.accentBlue, border: `1px solid ${theme.accentBlue}` }}>
                  Integrar API
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="h-100 shadow-sm border-0 rounded-4 transition-all" style={{ backgroundColor: theme.cardBackground }}>
              <Card.Body className="p-5 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex p-4 rounded-circle" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                    <FaCloudUploadAlt size={40} color={theme.accentGreen} />
                  </div>
                </div>
                <Card.Title as="h3" className="fw-bold mb-3" style={{ color: theme.primaryText }}>Subida de Archivos</Card.Title>
                <Card.Text className="mb-4" style={{ color: theme.secondaryText }}>
                  Arrastra tus datasets (.CSV, Excel, JSON). El sistema los limpia, formatea y visualiza automáticamente.
                </Card.Text>
                <Button className="rounded-pill px-4 fw-semibold" 
                        style={{ backgroundColor: 'transparent', color: theme.accentGreen, border: `1px solid ${theme.accentGreen}` }}>
                  Subir Data
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;