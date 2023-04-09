import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

const DeleteButton = ({id_persona, successCallback}) => {

    const eliminarPersona = async (personaID) => {

        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/people/${personaID}`);
            successCallback(personaID);
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const confirmarEliminar = (personaID) => {
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "No se puede revertir!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPersona(personaID)
            }
        })
    }

    return (
        <button className="btn btn-secondary ms-2" onClick={() => { confirmarEliminar(id_persona) }}>Eliminar</button>
    )
}

export default DeleteButton