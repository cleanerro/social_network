import preloader from "../../../assets/images/preloader.gif";
import s from "../../Users/Users.module.css";
import React from "react";


export const Preloader =  () => {
    return (
        <img src={preloader} className={s.preloader}/>
    )
}