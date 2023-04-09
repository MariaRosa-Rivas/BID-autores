import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../pages/personas/personas.css'



const PersonasErrores = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'El nombre debe tener como minimo 3 caracteres')
        .max(20, 'No puede ser muy largo el nombre.')
        .required('Requerido'),
});

const PersonaForm = ({initialValues, botonTexto, onSubmit}) => {

  return (
    <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={PersonasErrores}
    >
        {({ errors, touched, isValid, dirty }) => (
            <Form>
                <Field name="nombre" className="form-control" placeholder="Nombre" />
                {touched.nombre && errors.nombre && <div className="ms-3 mt-1 text-danger">{errors.nombre}</div>}
                <Link className="btn  btn-primary mt-5 " to={`/`}>cancelar</Link>  
                <button className="btn btn-primary mt-5" disabled={!(isValid && dirty)}>{botonTexto}</button>
                
            </Form>
        )}
    </Formik>
  )
}

export default PersonaForm