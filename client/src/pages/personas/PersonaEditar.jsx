import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PersonaForm from '../../components/PersonaForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const PersonaEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        nombre: '',
      }

    const { id } = useParams()
    const [persona, setPersona] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people/${id}`);
            setPersona(respuesta.data);
        }

        getData();

    }, [id])

    const actualizarPersona = async(values, actions) => {

        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/people/${id}`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha actualizado ${respuesta.data.nombre} perfectamente!`,
                });

                navigate('/');
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
        <h6>Editar este Autor</h6>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <p>Nombre</p>
                    <PersonaForm 
                        initialValues={persona}
                        botonTexto="Enviar"
                        onSubmit={actualizarPersona}
                    />
                </div>
            </div>
        </>
    )
}

export default PersonaEditar