import { jugadoresTypes } from "../types";

const { SELECT_JUGADOR, INSERT_JUGADOR } = jugadoresTypes;

export const selectJugador = ()=>({
    type: SELECT_JUGADOR
});

export const insertJugador = (name, image, address, coords)=>({
    type: INSERT_JUGADOR,
    name: name,
    image: image,
    address: address,
    coords: coords
});
