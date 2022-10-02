import preloader from "../../../assets/images/preloader.gif";
import s from "../../users/Users.module.css";
import React from "react";


export const Preloader =  () => {
    return (
        <img src={preloader} className={s.preloader}/>
    )
}