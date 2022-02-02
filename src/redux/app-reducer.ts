import {ActionsTypes} from "./redux-store";
import {getUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


export type AuthType = {
    initialized: boolean
}

let initialState: AuthType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes): AuthType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitialize = () => ({type: SET_INITIALIZED}) as const

export const initializeApp = () => (dispatch: any) => {
    dispatch(getUserData())
        .then(() => {
                dispatch(setInitialize())
            }
        )
}


