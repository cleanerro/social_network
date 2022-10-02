import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "../../../assets/images/ava.png";
import React from "react";


type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type photosType = {
    small: string
    large: string
}

export type profileInfoPropsType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: photosType
}

export type profilePropsType = {
    profile: profileInfoPropsType | null
    status: string
    updateUserStatus: (status: string) => void



}

export const ProfileInfo = (props: profilePropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (<div className={s.descriptionInfo}>
            <div >
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
            </div>
            <div className={s.photo}>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}  </div>
            <div><a>{props.profile.contacts.website}</a></div>
            <div className={s.status}>
                <ProfileStatus  status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>

    </div>

    );
}

