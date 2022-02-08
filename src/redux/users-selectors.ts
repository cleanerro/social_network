import { createSelector } from "reselect";
import {StateType} from "./redux-store";
import {UsersDataType} from "./users-reducer";

export const getUsersSelector = (state: StateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users: Array<UsersDataType>) => {
    return users
})

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}