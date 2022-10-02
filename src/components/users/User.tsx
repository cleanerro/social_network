import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/ava.png";
import {UsersDataType} from "../../redux/users-reducer";
import {followApi} from "../../api/api";

export type UserPagePropsType = {
    user: UsersDataType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
}

export const User: React.FC<UserPagePropsType> = ({user, ...props}) => {
    return (
        <div>
            <div>
                <div className={s.users}>
                    <div className={s.avatar}>
                        <NavLink to={'profile/' + user.id}>
                            <div className={s.photo}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </div>
                        </NavLink>
                        <div className={s.follow}>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id ===user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    followApi.unFollow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)
                                        })
                                }}> Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id ===user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)

                                    followApi.follow(user.id)
                                    .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        props.toggleFollowingProgress(false, user.id)
                                    })
                                }}> Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.discription}>
                        <div className={s.name}>{user.name}</div>
                        <div className={s.status}>{user.status}</div>
                    </div>
                    <div className={s.location}>
                        <div className={s.country}>{'u.location.country'}</div>
                        <div className={s.city}>{'u.location.city'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}