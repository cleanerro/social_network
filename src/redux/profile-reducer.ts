import {PostsDataType} from "../App";
import {ActionsTypes} from "./redux-store";
import {profileApi} from "../api/api";


export type ProfilePageType = {
    posts: Array<PostsDataType>
    profile: null
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
            likesCount: 56,
        },
        {
            id: 2,
            message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            likesCount: 86
        },
        {
            id: 3,
            message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
            likesCount: 62
        },
        {
            id: 4,
            message: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            likesCount: 45
        },

    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: Date.now(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],

            }
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
export const addPost = (newPostText: string) => ({type: "ADD-POST", newPostText}) as const
