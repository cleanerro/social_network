import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {addPost, changeNewText, profileReducer, setUserProfile, setUserStatus} from "./profile-reducer";
import {addMessage, dialogsReducer, messageChange} from "./dialogs-reducer";
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
    ReturnType<typeof setUserStatus>|
    ReturnType<typeof setUserData>|
    ReturnType<typeof toggleFollowingProgress>


let reducer = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,


})

export type AppStateType = ReturnType<typeof reducer>

export let store:Store<AppStateType> = createStore(reducer, applyMiddleware(thunk))