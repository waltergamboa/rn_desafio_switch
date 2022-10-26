import { jugadoresTypes } from "../types";

const { SELECT_JUGADOR, DATOS_JUGADOR } = jugadoresTypes;

export const selectJugador = ()=>({
    type: SELECT_JUGADOR
});

export const datosJugador = (name, image, address, coords)=>({
    type: DATOS_JUGADOR,
    name: name,
    image: image,
    address: address,
    coords: coords
});
