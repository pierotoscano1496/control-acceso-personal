import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default ({ children }) => {
    const userSession = localStorage.getItem("user-session");
    const location = useLocation();

    return userSession ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />;
};