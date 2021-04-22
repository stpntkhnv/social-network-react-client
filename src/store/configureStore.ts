import {combineReducers, createStore} from "redux";
import {authReducer} from "./authentication/reducer";
import {chatReducer} from "./signalR/reducer";
import {loadingReducer} from "./loading/reducer";

let reducers = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    loading: loadingReducer
});

export let store = createStore(reducers);