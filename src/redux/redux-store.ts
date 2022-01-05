import {combineReducers, createStore, Store} from "redux";
import {addPost, changeNewText, profileReducer, setUserProfile} from "./profile-reducer";
import {addMessage, dialogsReducer, messageChange} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage, toggleFollowingProgress,
    toggleIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow, usersReducer,

} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


export type StateType = ReturnType<typeof reducer>

export type ActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof changeNewText> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof messageChange>|
    ReturnType<typeof follow>|
    ReturnType<typeof unfollow>|
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setUsersTotalCount>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setUserData>|
    ReturnType<typeof toggleFollowingProgress>


let reducer = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,


})

export type StoreType = ReturnType<typeof reducer>

export let store:Store<StoreType> = createStore(reducer, applyMiddleware(thunk))