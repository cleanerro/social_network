import {ActionsTypes, PostsDataType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: 7,
                message: state.newPostText,
                likesCount: '0'
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST":
            state.newPostText = action.newText
            return state
        default:
            return  state
    }
}

export const addPostAC = () => ({type: "ADD-POST"}) as const
export const changeNewTextAC = (newText: string) => ({type: "UPDATE-NEW-POST", newText: newText}) as const