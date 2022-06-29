import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import '../../styles/LoginAdministrador.scss';

export default () => {
    const [codigo, setCodigo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { authenticated, login } = useAuth();
    const location = useLocation();

    const loginUser = () => {
        login(codigo, password).then(() => {
            // Call login
            navigate(location.state ? location.state.path : "/accesos");
        });
    };

    return (authenticated ? <Navigate to="/accesos" replace state={{ path: location.pathname }} />
        :
        <div className="container">
            <div className="form-content">
                <form onSubmit={loginUser} className="form-login">
                    <div>
                        <label>Usuario</label>
                        <input type="text" placeholder="Usuario" onChange={({ target }) => setCodigo(target.value)} value={codigo} />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" placeholder="Contraseña" onChange={({ target }) => setPassword(target.value)} value={password} />
                    </div>
                    <button type="submit" className="principal interactive">Ingresar</button>
                </form>
            </div>
        </div>
    );
};