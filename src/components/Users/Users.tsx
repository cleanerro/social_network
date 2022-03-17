import React from "react";
import {UsersDataType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersPagePropsType = {
    users: Array<UsersDataType>
    pageSize: number
    totalItemsCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
    portionSize: number
}

export const Users: React.FC<UsersPagePropsType> = (props) => {
    return <div>
        {props.users.map(u => <User user={u}
                                    key={u.id}
                                    followingInProgress={props.followingInProgress}
                                    follow={props.follow}
                                    toggleFollowingProgress={props.toggleFollowingProgress}
                                    unFollow={props.unFollow}/>)}

        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
                   portionSize = {props.portionSize}
                   totalItemsCount={props.totalItemsCount}/>

    </div>

}