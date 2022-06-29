import Variables from "../auxiliaries/Variables";

const endpoint = `${Variables.mainUrlApi}acceso/`;

export const obtenerAccesos = async (idAcceso) => {
    const response = await fetch(`${endpoint}${idAcceso}`);
    if (response.ok) {
        const accesos = await response.json();
        return accesos;
    }

    throw new Error(response.message);
};