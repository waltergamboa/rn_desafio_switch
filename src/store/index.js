import { createStore, combineReducers } from "redux";
import { paisesReducer, capitalesReducer } from "./reducers";

const rootReducer = combineReducers({
    paises: paisesReducer,
    capitales: capitalesReducer
});

export default createStore(rootReducer);