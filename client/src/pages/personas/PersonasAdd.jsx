import React from 'react'
import PersonaForm from '../../components/PersonaForm'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'


const PersonasAdd = () => {
  const navigate = useNavigate();
  const initialValues = {
    nombre: '',
  }

  const crearPersona = async(values, actions) => {

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/people`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado ${respuesta.data.nombre} perfectamente!`,
            });
            navigate('/');

            actions.resetForm(initialValues);
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ops que mal!!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }

  return (
    <>
         <h1>Autores Favoritos</h1>
        <Link to="/" >Inicio</Link>
        <h6>Agregar a un nuevo Autor</h6>
        <hr />
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
            <p>Nombre</p>
                <PersonaForm 
                  initialValues={initialValues}
                  botonTexto="Enviar"
                  onSubmit={crearPersona}
                />
            </div>
        </div>
    </>
  )
}

export default PersonasAdd