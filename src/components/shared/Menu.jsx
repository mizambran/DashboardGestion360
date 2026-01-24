import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <>
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Dash 360</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Ingresar</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>

            {/* Esto se va a ver cuando este logueado */}
            <Nav.Link as={Link} to={'./compras'}>Compras</Nav.Link>
            <Nav.Link href="#pricing">Ventas</Nav.Link>
            <Nav.Link href="#pricing">Stock</Nav.Link>
            <Nav.Link href="#pricing">Ranking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Menu
