import s from './Header.module.css'
import React from 'react';



export const Header = () => {
    return (
        <header className= {s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgrxANLUJe9SsdmVxbw1pNudVjxO35Tx0Bg&usqp=CAU'/>
            <div className={s.search}>
                <input type="text" placeholder="Search..." name="search" />
            </div>
            <div className = {s.loginBlock}>


            </div>
        </header>

    )
}

