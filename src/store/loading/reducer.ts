import {applicationState, loadingState} from "../states";
import {FINISH_LOADING, loadingAction, START_LOADING} from "./actions";

let initialState : loadingState = {
    isLoading: false,
    status: 'initialization'
}

export const loadingReducer = (state = initialState, action: loadingAction) => {
    switch (action.type) {
        case FINISH_LOADING:
            console.log('finish loading')
            return{
                ...state,
                isLoading: false,
                status: 'loaded'
            }
        case START_LOADING:
            console.log('start loading')
            return{
                ...state,
                isLoading: true,
                status: 'loading...'
            }
        default:
            return{
                ...state
            }

    }
}
