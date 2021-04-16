import {combineReducers, createStore} from "redux";
import {authReducer} from "./authentication/reducer";

let reducers = combineReducers({
    auth: authReducer
});

export let store = createStore(reducers);