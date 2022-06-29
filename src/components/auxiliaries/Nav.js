import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../../styles/Nav.scss";

export default () => {
    const { authenticated, logout } = useAuth();
    const [userSession, setUserSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            const user = localStorage.getItem("user-session");
            setUserSession(JSON.parse(user));
        }
    }, [authenticated]);

    const handleLogout = () => {
        localStorage.removeItem("user-session");
        logout();
        navigate("/login");
    };

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <nav>
            <ul>
                <li className="content-nav">
                    {authenticated ?
                        <>
                            <p className="nav-item">Hola {userSession?.nombres}</p>
                            <Link to="/accesos" className="nav-item principal interactive">Accesos</Link>
                            <button onClick={handleLogout} className="nav-item optional interactive">Salir</button>
                        </>
                        :
                        <>
                            <button className="nav-item principal interactive" onClick={goToLogin}>Iniciar sesión</button>
                        </>
                    }
                </li>
            </ul>
        </nav>
    );
}