import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


const Compras = () => {
  return (
    <div >
      <div className='col-12 col-md-8 container my-4 filtrosGeneralesCompras'>
        <Card >
      <Card.Body className='d-flex justify-content-between'>
        <div className='d-flex flex-column'>
            <label htmlFor="">Desde</label>
            <input type="date" />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="">Hasta</label>
            <input type="date" />
        </div>
        <div>
            <label htmlFor="">Empresa/Sucursal</label>
            <Form.Select aria-label="Default select example">
            <option>Selecciona</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
        </div>
        <div>
            <label htmlFor="">Proveedor</label>
            <Form.Select aria-label="Default select example">
            <option>Selecciona</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
        </div>
        
        <Button variant="primary">Actualizar</Button>
      </Card.Body>
    </Card>
      </div>

      <div className='d-flex justify-content-evenly cardsResumido'>
        <Card className='col-6 col-md-4 col-lg-3 text-center'>
      <Card.Body>
        <Card.Title className='bg-primary'>Total Comprado</Card.Title>
        <Card.Text>
          $1.000.000
        </Card.Text>
        <Button variant="outline-primary">Desglose</Button>
      </Card.Body>
    </Card>

    <Card className='col-6 col-md-4 col-lg-3 text-center'>
      <Card.Body>
        <Card.Title className='bg-success'>Pagado</Card.Title>
        <Card.Text>
          $700.000
        </Card.Text>
        <Button variant="outline-success">Desglose</Button>
      </Card.Body>
    </Card>

    <Card className='col-6 col-md-4 col-lg-3 text-center'>
      <Card.Body>
        <Card.Title className='bg-danger'>Deuda</Card.Title>
        <Card.Text>
          $300.000
        </Card.Text>
        <Button variant="outline-danger">Desglose</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='container my-5'>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Proveedor</th>
          <th>Comprado</th>
          <th>Deuda</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>$15.000.000</td>
          <td>$1.000.000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>$100.000</td>
          <td>$0</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default Compras
