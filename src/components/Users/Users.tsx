import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/ava.png";
import {UsersDataType} from "../../redux/users-reducer";
import {followApi} from "../../api/api";
import {Paginator} from "../common/Paginator/Paginator";

export type UsersPagePropsType = {
    users: Array<UsersDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
}

export const Users = (props: UsersPagePropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.users}>
                    <div className={s.avatar}>
                        <NavLink to={'profile/' + u.id}>
                            <div className={s.photo}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                        </NavLink>
                        <div className={s.follow}>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    followApi.unFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
                                }}> Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)

                                    followApi.follow(u.id)
                                    .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        props.toggleFollowingProgress(false, u.id)
                                    })
                                }}> Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.discription}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div className={s.country}>{'u.location.country'}</div>
                        <div className={s.city}>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)}
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}  />

        </div>
    )
}