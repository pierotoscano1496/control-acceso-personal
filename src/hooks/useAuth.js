import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user-session")) {
            setAuthenticated(true);
        }
    }, []);

    const login = (codigo, password) => {
        return new Promise((res) => {
            // Call API
            localStorage.setItem("user-session", JSON.stringify({
                id: 1,
                codigo: '2010304050',
                card: 'ABCSDFGHJ',
                nombres: 'Piero',
                apellidos: 'Toscano Rojas',
                fechaNacimiento: new Date(1996, 14, 1),
                rol: 1
            }));
            setAuthenticated(true);
            res();
        });
    };

    const logout = () => {
        return new Promise((res) => {
            setAuthenticated(null);
            res();
        });
    };

    return <AuthContext.Provider value={{ authenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export default () => {
    return useContext(AuthContext);
};