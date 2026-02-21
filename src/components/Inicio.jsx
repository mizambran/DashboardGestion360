import React, { useContext } from 'react'; // 1. Importar useContext
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCloudUploadAlt, FaPlug, FaChartArea } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeContext'; // 2. Importar tu Contexto
import { FaBrain, FaChartLine, FaChartBar, FaCheckCircle } from 'react-icons/fa';


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
      {/* SECCIÓN: IMPORTANCIA DE LOS DATOS */}
      <Container className="my-5 py-5 border-top" style={{ borderColor: theme.border }}>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <FaBrain size={50} style={{ color: theme.accentBlue }} className="mb-4" />
            <h2 className="fw-bold mb-4" style={{ color: theme.primaryText }}>
              Decisiones basadas en <span style={{ color: theme.accentGreen }}>certezas</span>, no en intuición.
            </h2>
            <p className="fs-5" style={{ color: theme.secondaryText, lineHeight: '1.8' }}>
              En un entorno competitivo, trabajar con información clara, oportuna y bien estructurada marca la diferencia entre el estancamiento y el crecimiento. Dash360 convierte el ruido de tus bases de datos en un mapa claro para el futuro de tu negocio.
            </p>
          </Col>
        </Row>
      </Container>
      {/* SECCIÓN: PREVIEW DE GRÁFICOS (HOVER EFECTO) */}
      <Container className="my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: theme.primaryText }}>Visualizaciones Dinámicas</h2>
          <p className="fs-5" style={{ color: theme.secondaryText }}>Interactúa con tus métricas en tiempo real.</p>
        </div>
        <Row className="g-4">
          {/* Gráfico 1 */}
          <Col md={6}>
            <Card 
              className="h-100 border-0 rounded-4 shadow-lg overflow-hidden" 
              style={{ backgroundColor: theme.cardBackground, transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-center text-center">
                <FaChartLine size={80} style={{ color: theme.accentGreen, marginBottom: '20px' }} />
                <h4 className="fw-bold" style={{ color: theme.primaryText }}>Evolución de Ingresos</h4>
                <p style={{ color: theme.secondaryText }}>Proyecciones y tendencias históricas con un clic.</p>
                {/* Simulación visual de barras de gráfico */}
                <div className="w-100 mt-4 d-flex align-items-end justify-content-between" style={{ height: '60px' }}>
                  <div style={{ width: '15%', height: '40%', backgroundColor: theme.accentBlue, borderRadius: '4px' }}></div>
                  <div style={{ width: '15%', height: '60%', backgroundColor: theme.accentGreen, borderRadius: '4px' }}></div>
                  <div style={{ width: '15%', height: '30%', backgroundColor: theme.accentBlue, borderRadius: '4px' }}></div>
                  <div style={{ width: '15%', height: '80%', backgroundColor: theme.accentGreen, borderRadius: '4px' }}></div>
                  <div style={{ width: '15%', height: '100%', backgroundColor: theme.accentBlue, borderRadius: '4px' }}></div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Gráfico 2 */}
          <Col md={6}>
            <Card 
              className="h-100 border-0 rounded-4 shadow-lg overflow-hidden" 
              style={{ backgroundColor: theme.cardBackground, transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-center text-center">
                <FaChartBar size={80} style={{ color: theme.accentBlue, marginBottom: '20px' }} />
                <h4 className="fw-bold" style={{ color: theme.primaryText }}>Distribución de Costos</h4>
                <p style={{ color: theme.secondaryText }}>Desglose detallado por departamento y categoría.</p>
                {/* Simulación visual de gráfico circular (donut) */}
                <div className="w-100 mt-4 d-flex align-items-center justify-content-center">
                   <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: `10px solid ${theme.accentBlue}`, borderTopColor: theme.accentGreen }}></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* SECCIÓN: PLANES Y PRECIOS */}
      <Container className="my-5 py-5 border-top" style={{ borderColor: theme.border }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: theme.primaryText }}>Escala según tus necesidades</h2>
          <p className="fs-5" style={{ color: theme.secondaryText }}>Planes diseñados para equipos de cualquier tamaño.</p>
        </div>

        <Row className="g-4 justify-content-center align-items-center">
          {/* Plan Gratis */}
          <Col lg={4} md={6}>
            <Card className="border-0 rounded-4 shadow-sm" style={{ backgroundColor: theme.cardBackground }}>
              <Card.Body className="p-5 d-flex flex-column">
                <h4 className="fw-bold mb-3" style={{ color: theme.primaryText }}>Gratis</h4>
                <h2 className="display-4 fw-bold mb-4" style={{ color: theme.accentBlue }}>$0</h2>
                <ul className="list-unstyled mb-4 flex-grow-1" style={{ color: theme.secondaryText }}>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> 1 Dashboard</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> Archivos planos (.csv)</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> Soporte en comunidad</li>
                </ul>
                <Button variant="outline-light" className="w-100 rounded-pill fw-bold" style={{ color: theme.primaryText, borderColor: theme.border }}>
                  Comenzar Gratis
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Autogestión (Destacado) */}
          <Col lg={4} md={6}>
            <Card className="border-0 rounded-4 shadow-lg position-relative" style={{ backgroundColor: theme.cardBackground, border: `2px solid ${theme.accentGreen} !important`, transform: 'scale(1.05)', zIndex: 1 }}>
              <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill" style={{ backgroundColor: theme.accentGreen, color: '#000', padding: '8px 16px', fontSize: '0.9rem' }}>
                Más popular
              </div>
              <Card.Body className="p-5 d-flex flex-column mt-3">
                <h4 className="fw-bold mb-3" style={{ color: theme.primaryText }}>Autogestión</h4>
                <h2 className="display-4 fw-bold mb-4" style={{ color: theme.accentGreen }}>$29<span className="fs-5 text-muted">/mes</span></h2>
                <ul className="list-unstyled mb-4 flex-grow-1" style={{ color: theme.secondaryText }}>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentGreen }} /> Dashboards ilimitados</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentGreen }} /> Conexión API RESTful</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentGreen }} /> Exportación a PDF</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentGreen }} /> Soporte por email</li>
                </ul>
                <Button className="w-100 rounded-pill fw-bold border-0" style={{ backgroundColor: theme.accentGreen, color: '#000' }}>
                  Prueba de 14 días
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Asistido */}
          <Col lg={4} md={6}>
            <Card className="border-0 rounded-4 shadow-sm" style={{ backgroundColor: theme.cardBackground }}>
              <Card.Body className="p-5 d-flex flex-column">
                <h4 className="fw-bold mb-3" style={{ color: theme.primaryText }}>Asistido</h4>
                <h2 className="display-4 fw-bold mb-4" style={{ color: theme.accentBlue }}>$99<span className="fs-5 text-muted">/mes</span></h2>
                <ul className="list-unstyled mb-4 flex-grow-1" style={{ color: theme.secondaryText }}>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> Todo en Autogestión</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> Analista dedicado</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> Integraciones a medida</li>
                  <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: theme.accentBlue }} /> Soporte 24/7 (SLA)</li>
                </ul>
                <Button variant="outline-light" className="w-100 rounded-pill fw-bold" style={{ color: theme.primaryText, borderColor: theme.border }}>
                  Contactar Ventas
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