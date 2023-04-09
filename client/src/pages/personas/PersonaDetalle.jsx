import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const PersonaDetalle = () => {

    const { id } = useParams()
    const [persona, setPersona] = useState({})

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people/${id}`);
            setPersona(respuesta.data);
        }

        getData();

    }, [id])

    return (
        <div className="card">
            <div className="card-header">
                Detalle de la Persona
            </div>
            <div className="card-body">
                <h5 className="card-title">Nombre: {persona.nombre}</h5>
                <p className="card-text">La persona tiene {persona.edad} años de edad y su apellido es {persona.apellido}</p>
                <Link className="btn btn-primary" to="/personas" >Volver</Link>
            </div>
        </div>
    )
}

export default PersonaDetalle