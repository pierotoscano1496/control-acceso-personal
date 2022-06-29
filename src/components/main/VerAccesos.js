import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { obtenerAccesos } from "../../services/AccesoService";
import '../../styles/VerAccesos.scss';

export default () => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userSession = localStorage.getItem("user-session");
        setUsuario(JSON.parse(userSession));
    }, []);

    const buscarAccesos = async (e) => {
        e.preventDefault();
        try {
            const accesos = await obtenerAccesos(1000);
            console.log(accesos);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <h1>Visualización de accesos</h1>
            <p>Puede buscar los accesos por nombre del personal y/o fechas</p>
            <p>En caso de escoger un usuario, podrá visualizar su récord de asistencias.</p>
            <form onSubmit={buscarAccesos} className="form-ver-accesos">
                <div>
                    <p>Escoja un usuario:</p>
                    <select>
                        <option>--SELECCIONE--</option>
                    </select>
                </div>
                <div>
                    <p>Desde</p>
                    <input type="date" name="fechaInicio" />
                    <p>a</p>
                    <input type="date" name="fechaFin" />
                </div>
                <div>
                    <button type="submit" className="principal interactive">Buscar</button>
                    <button type="button" className="optional interactive">Limpiar</button>
                </div>
            </form>
        </div>
    );
}