
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import Menu from '../components/shared/Menu'; // Asegurate de importar tu Menu
import Footer from '../components/shared/Footer'; // Asegurate de importar tu Footer

const Inicio = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HERO SECTION: Estilo Financiero/Tech */}
      <div className="bg-dark text-white py-5 mt-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <Badge bg="info" className="mb-3 text-dark">Nuevo: API v2.0</Badge>
              <h1 className="display-4 fw-bold">Inteligencia Financiera Centralizada</h1>
              <p className="lead text-light opacity-75">
                Conecta tus flujos de datos o sube tus reportes estáticos. 
                Dash360 transforma la información cruda en decisiones estratégicas.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                <Button variant="primary" size="lg" className="px-5">Comenzar</Button>
                <Button variant="outline-light" size="lg" className="px-5">Demo</Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
               {/* Placeholder visual para un gráfico/dashboard */}
              <div className="bg-secondary bg-opacity-25 p-5 rounded-3 border border-secondary text-center" style={{minHeight: '300px'}}>
                  <span className="text-muted display-6">Dashboard Preview Area</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* FEATURES SECTION: API vs Archivos */}
      <Container className="my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">¿Cómo quieres procesar tus datos?</h2>
          <p className="text-muted">Flexibilidad total para tu flujo de trabajo.</p>
        </div>

        <Row>
          {/* Opción 1: API */}
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-5 text-center">
                <div className="display-4 text-primary mb-3">
                  <i className="bi bi-hdd-network"></i> {/* Si usas bootstrap-icons */}
                </div>
                <Card.Title as="h3">Conexión API</Card.Title>
                <Card.Text className="text-muted">
                  Sincronización en tiempo real. Conecta tus endpoints JSON y deja que Dash360 actualice tus gráficos automáticamente.
                </Card.Text>
                <Button variant="outline-primary" className="mt-3">Configurar API</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Opción 2: Archivos */}
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-5 text-center">
                <div className="display-4 text-success mb-3">
                  <i className="bi bi-file-earmark-spreadsheet"></i>
                </div>
                <Card.Title as="h3">Subida de Archivos</Card.Title>
                <Card.Text className="text-muted">
                  ¿Datos offline? Sube tus archivos .CSV, .XLSX o .JSON. Procesamiento inmediato y seguro en nuestros servidores.
                </Card.Text>
                <Button variant="outline-success" className="mt-3">Subir Archivo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CALL TO ACTION */}
      <Container fluid className="bg-light py-5 text-center mt-auto">
        <Container>
            <h3 className="mb-3">Optimiza tus reportes hoy</h3>
            <Button variant="dark" size="lg">Crear Cuenta Gratuita</Button>
        </Container>
      </Container>

    </div>
  );
};

export default Inicio;