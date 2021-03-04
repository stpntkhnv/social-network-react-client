import {Action, combineReducers, createStore, ReducersMapObject, Store} from "redux";
import {authReducer} from "./Authentication/reducer";

let reducers = combineReducers({
    auth: authReducer
});

export let store = createStore(reducers);