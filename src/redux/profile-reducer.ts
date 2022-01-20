import {PostsDataType} from "../App";
import {ActionsTypes} from "./redux-store";
import {profileApi} from "../api/api";


export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostText: string
    profile: null
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'hi', likesCount: '56'},
        {id: 2, message: 'I am front-end developer', likesCount: '86'},
        {id: 3, message: 'Yo', likesCount: '46'},
        {id: 4, message: 'Yo', likesCount: '57'},
        {id: 5, message: 'Hello', likesCount: '44'},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: 7,
                message: state.newPostText,
                likesCount: '0'
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case "UPDATE-NEW-POST":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}


        default:
            return state
    }
}
//Thank

export const getUserProfile = (userId: string) => (dispatch: any) => {
    profileApi.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export const getUserStatus = (userId: string) => (dispatch: any) => {
    profileApi.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileApi.updateStatus(status)
        .then(data => {
            if(data.resultCode ===0){
                dispatch(setUserStatus(status))
            }
        })
}

//AC
export const setUserProfile = (profile: null) => ({type: "SET-USER-PROFILE", profile}) as const
export const setUserStatus = (status: string) => ({type: "SET-USER-STATUS", status}) as const
export const addPost = () => ({type: "ADD-POST"}) as const
export const changeNewText = (newText: string) => ({type: "UPDATE-NEW-POST", newText}) as const