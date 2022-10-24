import { insertJugador, getJugador } from "../../db";
import { jugadoresTypes } from "../types";

const { SELECT_JUGADOR, INSERT_JUGADOR } = jugadoresTypes;

const initialState = {
    jugadores: []
}

const jugadoresReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_JUGADOR:
            // const indexPais = state.paises.findIndex(
            //     (pais) => pais.id === action.paisId
            // );
            // if(indexPais === -1) return state;

            // return {
            //     ...state,
            //     selected: state.paises[action.paisId]
            // }
          //state.jugadores = getJugadores();
          // abc();
          //console.log("entre");
          const resultado = getJugadores();
          if (resultado.array){
          resultado.array.forEach(element => {
            console.log(element)
          });
        }
           return {
                ...state,
                jugadores: resultado
             }          
        default:
            return state;
    }
    
}

const abc=()=>{
    console.warn("uno");
}

const getJugadores = async ()=>{
    const insert = await insertJugador("uno", "dos", "tres", {lat: 12, lng: 23});
    const result = await getJugador();
    return result?.rows?._array;
}

export default jugadoresReducer;