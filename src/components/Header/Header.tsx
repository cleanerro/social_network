import s from './Header.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";
import {HeaderContainerPagePropsType} from "./HeaderContainer";
import logo from "../../assets/images/logo.png";
import userPhoto from "../../assets/images/ava.png";


export const Header = (props: HeaderContainerPagePropsType) => {
    return (
        <header className={s.header}>
            <NavLink to={'/profile'}>
                <span className={s.logo}>  <img src={logo} alt={''}/></span>
            </NavLink>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.login}>
                        <span className={s.photo}>
                             <img src={props.profile?.photos.large != null ? props.profile.photos.large : userPhoto}/>
                        </span>
                        <span className={s.button}>
                            <button onClick={props.logoutTC}>Log out</button>
                        </span>

                    </div>
                    : <div className={s.login}>
                        <NavLink to={'/login'}>
                            <span className={s.button}>
                            <button>Log in</button>
                        </span>
                        </NavLink>
                    </div>
                }


            </div>
        </header>

    )
}

