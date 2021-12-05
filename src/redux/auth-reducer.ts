import {ActionsTypes} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'



export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}

export const authReducer = (state = initialState, action: ActionsTypes): AuthType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        default:
            return state
    }
}

export const setUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}}) as const
