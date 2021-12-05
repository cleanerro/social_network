import s from './Header.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";


export const Header = (props: AuthType) => {
    return (
        <header className={s.header}>
            <NavLink to={'.'}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgrxANLUJe9SsdmVxbw1pNudVjxO35Tx0Bg&usqp=CAU'/>
            </NavLink>

            <div className={s.search}>
                <input type="text" placeholder="Search..." name="search"/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}





            </div>
        </header>

    )
}

