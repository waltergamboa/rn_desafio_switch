import { createStore, combineReducers } from "redux";
import { paisesReducer, capitalesReducer, jugadoresReducer } from "./reducers";

const rootReducer = combineReducers({
    paises: paisesReducer,
    capitales: capitalesReducer,
    jugadores: jugadoresReducer
});

export default createStore(rootReducer);