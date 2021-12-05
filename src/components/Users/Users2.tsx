import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {UsersContainerPagePropsType} from "./UsersContainer";
import  axios from 'axios'
import  userPhoto from '../../assets/images/ava.png'


export const Users = (props: UsersContainerPagePropsType) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
        /*props.setUsers([
                {
                    id: 1,
                    followed: false,
                    fullName: 'Roma',
                    status: 'I am Programmer',
                    avatarPhoto: 'https://uc.zone/data/avatars/l/17/17137.jpg?1554094345',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Dima',
                    status: 'Hello',
                    avatarPhoto: 'https://uc.zone/data/avatars/l/17/17137.jpg?1554094345',
                    location: {city: 'Lutsk', country: 'Ukraine'}
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Oleksandr',
                    status: 'Yoo!',
                    avatarPhoto: 'https://uc.zone/data/avatars/l/17/17137.jpg?1554094345',
                    location: {city: 'Odesa', country: 'Ukraine'}
                },
            ]
        )*/
    }


    /* let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
     let pages = [];
     for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
     }*/

    return <div>
        {/* <div>
            {pages.map(p => {
                return <span onClick={(e) => { props.onPageChanged(p)}}> {p}</span>
            })}
        </div>*/}
        {props.users.map(u => <div key={u.id}>
            <div className={s.users}>
                <div className={s.avatar}>
                    <NavLink to={'profile/'}>
                        <div className={s.photo}>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto }/>
                        </div>
                    </NavLink>

                    <div className={s.follow}>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
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


    </div>
}


