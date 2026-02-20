import React, { useContext } from 'react'; // 1. Importamos useContext
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa';
// Importa el Menu y el Contexto (ajusta las rutas si es necesario)
import Menu from '../shared/Menu'; 
import { ThemeContext } from '../../Context/Theme/ThemeContext'; // 2. Importamos el Contexto

const Login = () => {
  // 3. Extraemos el tema del contexto
  const { theme } = useContext(ThemeContext);

  return (
    // Reemplazamos los colores fijos por las variables del tema
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: theme.background }}>
      {/* Asumo que quieres mostrar el menú también en el login, según tu código anterior */}
      <Menu /> 
      
      <div className="flex-grow-1 d-flex align-items-center pt-5 mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={5}>
              <Card className="shadow-lg rounded-4 mb-5" style={{ backgroundColor: theme.cardBackground, border: `1px solid ${theme.border}` }}>
                
                <Card.Header className="text-center py-4 border-0 rounded-top-4" style={{ backgroundColor: theme.headerBackground }}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <FaChartPie className="me-2" size={24} style={{ color: theme.accentGreen }} />
                    <h2 className="fw-bold mb-1" style={{ color: theme.primaryText }}>Dash360</h2>
                  </div>
                  <p className="mb-0 small" style={{ color: theme.secondaryText }}>Acceso seguro a tu panel de control</p>
                </Card.Header>

                <Card.Body className="p-4 p-md-5">
                  <Form>
                    <Form.Group className="mb-4" controlId="loginEmail">
                      <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Correo Electrónico</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="analista@empresa.com" 
                        size="lg" 
                        className="border-0 shadow-sm text-dark"
                        style={{ backgroundColor: theme.inputBackground }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginPassword">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Form.Label className="fw-semibold mb-0" style={{ color: theme.primaryText }}>Contraseña</Form.Label>
                        <a href="#recuperar" className="text-decoration-none small fw-medium" style={{ color: theme.accentBlue }}>
                          ¿Olvidaste tu clave?
                        </a>
                      </div>
                      <Form.Control 
                        type="password" 
                        placeholder="••••••••" 
                        size="lg" 
                        className="border-0 shadow-sm text-dark"
                        style={{ backgroundColor: theme.inputBackground }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginRemember">
                      <Form.Check 
                        type="checkbox" 
                        label="Recordar mi sesión en este equipo" 
                        className="small"
                        style={{ color: theme.secondaryText }}
                      />
                    </Form.Group>

                    <div className="d-grid mt-4">
                      <Button size="lg" type="submit" className="fw-bold shadow-sm border-0 text-dark" style={{ backgroundColor: theme.accentGreen }}>
                        Ingresar al sistema
                      </Button>
                    </div>
                  </Form>
                </Card.Body>

                <Card.Footer className="text-center py-4 border-top rounded-bottom-4" style={{ backgroundColor: theme.headerBackground, borderTop: `1px solid ${theme.border}` }}>
                  <span className="small" style={{ color: theme.secondaryText }}>
                    ¿Aún no tienes acceso?{' '}
                    <Link to="/registro" className="fw-bold text-decoration-none" style={{ color: theme.accentBlue }}>
                      Solicitar cuenta
                    </Link>
                  </span>
                </Card.Footer>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;