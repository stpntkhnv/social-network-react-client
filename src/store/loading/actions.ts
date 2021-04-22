export const START_LOADING = "START_LOADING"
export const FINISH_LOADING = "FINISH_LOADING"

interface startLoadingAction{
    type: typeof START_LOADING
}

interface finishLoadingAction{
    type: typeof FINISH_LOADING
}

export type loadingAction = startLoadingAction | finishLoadingAction

export const startLoading = () => ({type: START_LOADING})
export const finishLoading = () => ({type: FINISH_LOADING})