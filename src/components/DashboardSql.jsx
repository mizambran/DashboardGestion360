import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const DashboardSql = () => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const consultasGuardadas = JSON.parse(localStorage.getItem("consultasKey")) || []
    
    const [consultasBase, setConsultasBase] = useState(consultasGuardadas)

    const consultaBase = (data) => {
        const nuevaConsulta = {
            id:uuidv4(),
            host: data.host,
            dataBase: data.dataBase
        }
        setConsultasBase([...consultasBase, nuevaConsulta])
        reset()
        Swal.fire({
            title:"Consulta Generada",
            text:"Aguarda un momento y veras los cambios",
            icon:"success"
        })
    }

    useEffect(() => {
        localStorage.setItem("consultasKey", JSON.stringify(consultasBase))
    }, [consultasBase])

  return (
    <div className='container my-5'>
      <Form onSubmit={handleSubmit(consultaBase)} className='col-12 col-md-6'>
      <Form.Group className="mb-3" >
        <Form.Label>Host</Form.Label>
        <Form.Control type="text" placeholder="Ej: sistec00.dnsalias.com" {...register("host", {
            required:"Este campo es obligatorio",
        })} />
        <Form.Text className='text-danger'> {errors.host?.message} </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Base de Datos</Form.Label>
        <Form.Control type="text" placeholder="Ej: data_base" {...register("dataBase", {
            required:"Ingresa el nombre Técnico de la base"
        })} />
        <Form.Text className='text-danger'> {errors.dataBase?.message} </Form.Text>
      </Form.Group>
      <Button type='submit'>Conectar</Button>
    </Form>

    </div>
  )
}

export default DashboardSql
