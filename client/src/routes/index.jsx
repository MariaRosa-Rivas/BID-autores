import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import PersonaDetalle from "../pages/personas/PersonaDetalle";
import PersonaEditar from "../pages/personas/PersonaEditar";
import Personas from "../pages/personas/Personas";
import PersonasAdd from "../pages/personas/PersonasAdd";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Personas />
            },
            {
                path:'autores/agregar',
                element: <PersonasAdd />
            },
            {
                path:'autores/:id',
                element: <PersonaDetalle />
            },
            {
                path:'autores/:id/editar',
                element: <PersonaEditar />
            }
        ]
    }
]);