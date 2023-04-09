import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton';

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people`);
      setPersonas(respuesta.data);
    }

    getData();
  
  }, []);
  
  const quitarPersona = (personaID) => {
    setPersonas(personas.filter((persona) => persona._id !== personaID));
  }


  return (
    <>
      <h1>Autores Favoritos</h1>
      <Link to="/autores/agregar" >Agregar un autor</Link>
      <h6>We have quotes by:</h6>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Autores</th>
            <th>Acciones Validas</th>
          </tr>
        </thead>
        <tbody>
          { personas.map( (persona, index) => <tr key={index} >
            <td><h6>{ persona.nombre }</h6></td>
            <td> 
              <Link className="btn  btn-secondary ms-2" to={`/autores/${persona._id}/editar`}>Editar</Link>   
              <DeleteButton id_persona={persona._id} successCallback={quitarPersona} />
            </td>
          </tr> ) }
        </tbody>
      </table>
   
    </>
  )
}

export default Personas