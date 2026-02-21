import React, { useContext } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { ThemeContext } from '../Context/Theme/ThemeContext'; 

const Contacto = () => {
  // Extraemos el tema actual del contexto
  const { theme } = useContext(ThemeContext);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: theme.background }}>

      <div className="flex-grow-1 pt-5 mt-5">
        <Container className="py-5">
          {/* Encabezado de la página */}
          <div className="text-center mb-5 pb-3">
            <h1 className="fw-extrabold display-5" style={{ color: theme.primaryText }}>
              Conecta con <span style={{ color: theme.accentBlue }}>nuestro equipo</span>
            </h1>
            <p className="fs-5" style={{ color: theme.secondaryText }}>
              ¿Tenés dudas sobre cómo integrar tus bases de datos? Estamos para ayudarte.
            </p>
          </div>

          <Row className="g-5 justify-content-center">
            {/* Columna Izquierda: Información de Contacto */}
            <Col lg={5} className="d-flex flex-column justify-content-center pe-lg-5">
              <h3 className="fw-bold mb-4" style={{ color: theme.primaryText }}>Hablemos de tus datos</h3>
              <p className="mb-5" style={{ color: theme.secondaryText, lineHeight: '1.8' }}>
                Nuestro equipo de ingenieros está listo para asesorarte en la arquitectura ideal para tu empresa. Escribinos y te responderemos en menos de 24 horas hábiles.
              </p>

              {/* Ítem: Email */}
              <div className="d-flex align-items-center mb-4">
                <div className="d-inline-flex p-3 rounded-circle me-3" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                  <FaEnvelope size={24} color={theme.accentBlue} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: theme.primaryText }}>Email corporativo</h6>
                  <span style={{ color: theme.secondaryText }}>soporte@dash360.com</span>
                </div>
              </div>

              {/* Ítem: Teléfono */}
              <div className="d-flex align-items-center mb-4">
                <div className="d-inline-flex p-3 rounded-circle me-3" style={{ backgroundColor: 'rgba(210, 255, 0, 0.1)' }}>
                  <FaPhoneAlt size={24} color={theme.accentGreen} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: theme.primaryText }}>Soporte técnico</h6>
                  <span style={{ color: theme.secondaryText }}>+54 11 1234-5678</span>
                </div>
              </div>

              {/* Ítem: Ubicación */}
              <div className="d-flex align-items-center">
                <div className="d-inline-flex p-3 rounded-circle me-3" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                  <FaMapMarkerAlt size={24} color={theme.accentBlue} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: theme.primaryText }}>Oficinas centrales</h6>
                  <span style={{ color: theme.secondaryText }}>San Miguel de Tucumán, Argentina</span>
                </div>
              </div>
            </Col>

            {/* Columna Derecha: El Formulario */}
            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4" style={{ backgroundColor: theme.cardBackground }}>
                <Card.Body className="p-4 p-md-5">
                  <Form>
                    {/* Fila: Nombre y Empresa */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="contactoNombre">
                          <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Nombre</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Tu nombre" 
                            className="border-0 shadow-sm"
                            style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="contactoEmpresa">
                          <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Empresa</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Tu empresa" 
                            className="border-0 shadow-sm"
                            style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Email */}
                    <Form.Group className="mb-4" controlId="contactoEmail">
                      <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Correo Electrónico</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="nombre@empresa.com" 
                        className="border-0 shadow-sm"
                        style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                      />
                    </Form.Group>

                    {/* Asunto (Select) */}
                    <Form.Group className="mb-4" controlId="contactoAsunto">
                      <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Asunto</Form.Label>
                      <Form.Select 
                        className="border-0 shadow-sm"
                        style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                      >
                        <option value="">Selecciona un motivo...</option>
                        <option value="api">Integración de API REST</option>
                        <option value="archivos">Problemas subiendo datasets</option>
                        <option value="facturacion">Planes y facturación</option>
                        <option value="otro">Otro</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Mensaje */}
                    <Form.Group className="mb-4" controlId="contactoMensaje">
                      <Form.Label className="fw-semibold" style={{ color: theme.primaryText }}>Mensaje</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Contanos cómo podemos ayudarte con tus datos..." 
                        className="border-0 shadow-sm"
                        style={{ backgroundColor: theme.inputBackground, color: theme.primaryText }}
                      />
                    </Form.Group>

                    {/* Botón de Enviar */}
                    <div className="d-grid mt-4">
                      {/* Nuevamente texto oscuro para contrastar con el verde lima */}
                      <Button size="lg" type="submit" className="fw-bold shadow-sm border-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: theme.accentGreen, color: '#000000' }}>
                        <FaPaperPlane className="me-2" /> Enviar Mensaje
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contacto;