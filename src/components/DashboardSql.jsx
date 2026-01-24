import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const DashboardSql = () => {
  return (
    <div className='container'>
      <Form className='col-12 col-md-6'>
      <Form.Group className="mb-3" >
        <Form.Label>Host</Form.Label>
        <Form.Control type="text" placeholder="Ej: sistec00.dnsalias.com" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Base de Datos</Form.Label>
        <Form.Control type="text" placeholder="Ej: data_base" />
      </Form.Group>
      <Button>Conectar</Button>
    </Form>
    </div>
  )
}

export default DashboardSql
