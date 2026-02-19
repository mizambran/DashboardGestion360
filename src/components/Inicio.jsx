import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import { AiFillDatabase, AiFillApi, AiFillFileText } from "react-icons/ai";

const Inicio = () => {
  return (
    <>
    <div className='container d-flex justify-content-between'>
    <Card className="text-center col-4 col-md-3 my-5">
      <Card.Header>Basic</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button as={Link} to={'./dashboardApi'} variant="outline-danger"> <span><AiFillApi /></span> API</Button>
      </Card.Body>
    </Card>

    <Card className="text-center col-4 col-md-3 my-5">
      <Card.Header>Basic</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button as={Link} to={'./dashboardSql'} variant="outline-primary"> <span><AiFillDatabase /></span> SQL</Button>
      </Card.Body>
    </Card>

    <Card className="text-center col-4 col-md-3 my-5">
      <Card.Header>Premium</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button as={Link} to={'./dashboardArchivo'} variant="outline-success"> <span><AiFillFileText /></span> Archivo</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Inicio
