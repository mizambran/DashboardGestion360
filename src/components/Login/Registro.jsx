import React, { useContext } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa';
import { ThemeContext } from '../../Context/Theme/ThemeContext';



const Registro = () => {
  // Extraemos el tema del contexto
  const {theme} = useContext(ThemeContext)

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: theme.background }}>      
      <div className="flex-grow-1 d-flex align-items-center pt-5 mt-5">
        <Container>
          <Row className="justify-content-center">
            {/* Hacemos la tarjeta un poco más ancha (lg=7) para acomodar dos columnas */}
            <Col md={10} lg={7}>
              <Card className="shadow-lg rounded-4 mb-5" style={{ backgroundColor: theme.cardBackground, border: `1px solid ${theme.border}` }}>
                
                <Card.Header className="text-center py-4 border-0 rounded-top-4" style={{ backgroundColor: theme.headerBackground }}>
                  <div className='d-flex justify-content-center align-items-center mb-1'>
                    <FaChartPie className="me-2" size={24} style={{ color: theme.accentGreen }} />
                    <h2 className="fw-bold mb-0" style={{ color: theme.primaryText }}>Dash360</h2>
                  </div>
                  <p className="mb-0 small" style={{ color: theme.secondaryText }}>Crea tu cuenta de analista</p>
                </Card.Header>

                <Card.Body className="p-4 p-md-5">
                  <Form>
                    {/* Fila 1: Nombre y Apellido */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="regNombre">
                          <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Nombre</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Ej: Ana" 
                            size="lg" 
                            className="border-0 shadow-sm"
                            style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="regApellido">
                          <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Apellido</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Ej: García" 
                            size="lg" 
                            className="border-0 shadow-sm"
                            style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Fila 2: Email */}
                    <Form.Group className="mb-4" controlId="regEmail">
                      <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Correo Electrónico Empresarial</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="analista@empresa.com" 
                        size="lg" 
                        className="border-0 shadow-sm"
                        style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                      />
                    </Form.Group>

                    {/* Fila 3: Contraseña y Confirmar Contraseña */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="regPassword">
                          <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Contraseña</Form.Label>
                          <Form.Control 
                            type="password" 
                            placeholder="••••••••" 
                            size="lg" 
                            className="border-0 shadow-sm"
                            style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="regConfirmPassword">
                          <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Confirmar Contraseña</Form.Label>
                          <Form.Control 
                            type="password" 
                            placeholder="••••••••" 
                            size="lg" 
                            className="border-0 shadow-sm"
                            style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Términos y Condiciones */}
                    <Form.Group className="mb-4" controlId="regTerms">
                      <Form.Check 
                        type="checkbox" 
                        className="small"
                        style={{ color: theme.secondaryText }}
                        label={
                          <span>
                            Acepto los <a href="#terminos" className="fw-medium text-decoration-none" style={{ color: theme.accentBlue }}>Términos de Servicio</a> y la Política de Privacidad.
                          </span>
                        }
                      />
                    </Form.Group>

                    {/* Botón de Registro */}
                    <div className="d-grid mt-4">
                      {/* Le forzamos el texto en negro para que contraste perfecto con el verde neón */}
                      <Button size="lg" type="submit" className="fw-bold shadow-sm border-0" style={{ backgroundColor: theme.accentGreen, color: '#000000' }}>
                        Crear cuenta
                      </Button>
                    </div>
                  </Form>
                </Card.Body>

                <Card.Footer className="text-center py-4 border-top rounded-bottom-4" style={{ backgroundColor: theme.background, borderTop: `1px solid ${theme.border}` }}>
                  <span className="small" style={{ color: theme.secondaryText }}>
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="fw-bold text-decoration-none" style={{ color: theme.accentBlue }}>
                      Ingresar aquí
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

export default Registro;