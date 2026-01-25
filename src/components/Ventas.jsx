import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Ventas = () => {
  
  const crearKpi = () => {

  }
  
  
  return (
    <div>
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
        <Card.Title className='bg-primary'>Total Ventas</Card.Title>
        <Card.Text>
          $1.000.000
        </Card.Text>
        <Button variant="outline-primary">Desglose</Button>
      </Card.Body>
    </Card>

    <Card className='col-6 col-md-4 col-lg-3 text-center'>
      <Card.Body>
        <Card.Title className='bg-success'>Centro de Costo 1</Card.Title>
        <Card.Text>
          $700.000
        </Card.Text>
        <Button variant="outline-success">Desglose</Button>
      </Card.Body>
    </Card>

    <Card className='col-6 col-md-4 col-lg-3 text-center'>
      <Card.Body>
        <Card.Title className='bg-danger'>Centro de Costo 2</Card.Title>
        <Card.Text>
          $300.000
        </Card.Text>
        <Button variant="outline-danger">Desglose</Button>
      </Card.Body>
    </Card>
      </div>


      {/* La idea es que desde aqui el usuario pueda crear sus propias formulas para las KPIs
          Queden guardadas para luego ser utilizadas nuevamente.
          Falta agregar lo que es en SQL tipo_comprobante en los select para el user sería FA , NC , RE , RC
          Es decir el usuario busca las cosas en un lenguaje cotidiano y yo le agrego valores tecnicos para trabajarlos
      
      */}
      <div className='creadorKpi container ' style={{
        width:"18rem",
        padding:"2rem",
        marginTop:"1rem",
        marginBottom:"10rem",
        border:"3px solid green",
        borderRadius:"10%",
        boxShadow:"-10px 5px black"
      }} >
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre KPI</Form.Label>
        <Form.Control type="text" placeholder="Ej: Media Venta Mensual" />
      </Form.Group>
      <Form.Select aria-label="Default select example" className='my-2'>
      <option>Seleccionar</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </Form.Select>

      <Form.Select aria-label="Default select example" className='my-2'>
      <option>Seleccionar</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </Form.Select>

      <Form.Select aria-label="Default select example" className='my-2'>
      <option>Seleccionar</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </Form.Select>
      <Button variant='outline-success' type='submit' className='mt-3 text-light'>Crear KPI</Button>
      </Form>
      </div>
    </div>
  )
}

export default Ventas
