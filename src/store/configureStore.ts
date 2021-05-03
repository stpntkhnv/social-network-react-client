import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./authentication/reducer";
import {chatReducer} from "./signalR/reducer";
import {loadingReducer} from "./loading/reducer";
import {peoplesReducer} from "./peoples/reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    loading: loadingReducer,
    peoples: peoplesReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));