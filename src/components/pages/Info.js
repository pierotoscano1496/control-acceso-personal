import React from "react";
import useAuth from "../../hooks/useAuth";

export default () => {
    const { authenticated, login } = useAuth();

    return (
        <div className="container">
            <h1>Información</h1>
            <p>Bienvenido al sistema de visualización de accesos de personales.</p>
            {
                authenticated ? <p>Para continuar, diríjase al formulario de visualización <a href="/accesos" className="link-button optional">aquí</a>.</p>
                    : <p>Para continuar, inicie sesión <a href="/login" className="link-button principal">aquí</a>.</p>
            }
        </div>
    );
};