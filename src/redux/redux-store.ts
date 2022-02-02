import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {addPost, profileReducer, setUserProfile, setUserStatus} from "./profile-reducer";
import {addMessage, dialogsReducer,} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    usersReducer,
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer, setInitialize} from "./app-reducer";


export type StateType = ReturnType<typeof reducer>

export type ActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof follow>|
    ReturnType<typeof unfollow>|
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setUsersTotalCount>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setUserStatus>|
    ReturnType<typeof setUserData>|
    ReturnType<typeof toggleFollowingProgress>|
    ReturnType<typeof setInitialize>



let reducer = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer


})

export type AppStateType = ReturnType<typeof reducer>

export let store:Store<AppStateType> = createStore(reducer, applyMiddleware(thunk))