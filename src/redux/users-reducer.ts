import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USER_TOTAL_COUNT = 'SET-USER-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

type UserLocation = {
    city: string
    country: string
}
type UserPhotos = {
    small: string
    large: string
}

export type UsersDataType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: UserLocation
    photos: UserPhotos
}

export type UsersPageType = {
    users: Array<UsersDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    portionSize: number
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: true,
    portionSize: 10,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: !u.followed}
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: !u.followed}
                        }
                        return u
                    }
                )
            }
        case SET_USERS:{
            return {...state, users: action.users }
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_USER_TOTAL_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {...state, followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=> id !== action.userId)}
        }
        default:
            return state
    }
}
//Thank



//AC
export const follow = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: Array<UsersDataType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_USER_TOTAL_COUNT, totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number ) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}) as const