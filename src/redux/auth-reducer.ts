import {ActionsTypes} from "./redux-store";
import {authApi, LoginDataType} from "../api/api";
import {stopSubmit} from "redux-form";
import {profileInfoPropsType} from "../components/profile/Profileinfo/ProfileInfo";

const SET_USER_DATA = 'SET_USER_DATA'



export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    profile?: profileInfoPropsType | null

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
                ...action.payload,
            }
        default:
            return state
    }
}

export const setUserData = (userId: number|null, email: string|null, login: string|null, isAuth:boolean) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
    ) as const

export const getUserData = () => (dispatch: any) => {
   return  authApi.me()
        .then(data => {
            if(data.resultCode === 0){
                let {id, login, email} = data.data
                dispatch(setUserData( id, email, login, true))
            }
        })
}
export const loginTC = (data: LoginDataType) => (dispatch: any) => {
    authApi.login(data)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(getUserData())
            }else{
                let message  = data.messages.length> 0 ? data.messages[0]: 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logoutTC = () => (dispatch: any) => {
    authApi.logout()
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setUserData( null, null, null, false))

            }
            dispatch(getUserData())
        })
}
