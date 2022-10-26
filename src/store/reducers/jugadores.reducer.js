import { insertJugador, getJugador, updateJugador, deleteJugador } from "../../db";
import { jugadoresTypes } from "../types";

const { SELECT_JUGADOR, DATOS_JUGADOR } = jugadoresTypes;

const initialState = {
    jugador: [{name: "anonimo", image: null}]
}

let a = [];

const jugadoresReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_JUGADOR:
          const resultado = getJugadores()

        return {
            ...state,
            jugador: a
        }
           
        case DATOS_JUGADOR:            
            const b =  borrarJugadores();
            const i = insertJugadores(action.name, action.image);

        return {
            ...state,
            jugador: a
        }
        default:
            return state;
    }
}


const getJugadores = async ()=>{
    try {
    const result =  await getJugador()
    a = result?.rows?._array;
    return result?.rows?._array
} catch (error) {
    console.warn(error);
    throw error;
  }
}

const insertJugadores = async (name, image)=>{
    console.log("insert")
    if(!image){
        image = "";
    }
    const insert = await insertJugador(name, image, "tres", "cuatro");
    return insert ;
}

const updateJugadores = async ()=>{
    console.log("update")
    const update = await updateJugador(1, "unouno", "dosdos", "trestres", {lat: 12, lng: 23});
    return update ;
}

const borrarJugadores = async ()=>{
    console.log("borrar")
    const borrar = await deleteJugador();
    return borrar ;
}

export default jugadoresReducer;