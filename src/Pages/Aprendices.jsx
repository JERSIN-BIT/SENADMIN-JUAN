import { useEffect, useState } from "react";
import api from "../Api/api";

function Aprendices() {

const [aprendices, setAprendices] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
obtenerAprendices();
}, []);

const obtenerAprendices = async () => {
try {
const respuesta = await api.get("/apprentices");

setAprendices(respuesta.data);
} catch (error) {
console.error(error);
setError("No se pudieron cargar los aprendices.");
} finally {
setCargando(false);
}
};

return (
<div className="page-container">

    <h1>Aprendices</h1>

    {cargando && (
    <p>Cargando aprendices...</p>
    )}

    {error && (
    <p>{error}</p>
    )}

    {!cargando && !error && (
    <div>

        {aprendices.length === 0 ? (
        <p>
            No hay aprendices registrados.
        </p>
        ) : (

        <table className="data-table">

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Celular</th>
                </tr>
            </thead>

            <tbody>

                {aprendices.map((aprendiz) => (
                <tr key={aprendiz.id}>

                    <td>
                        {aprendiz.name}
                    </td>

                    <td>
                        {aprendiz.email}
                    </td>

                    <td>
                        {aprendiz.cell_number}
                    </td>

                </tr>
                ))}

            </tbody>

        </table>

        )}

    </div>
    )}

</div>
);
}

export default Aprendices;
