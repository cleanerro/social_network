import React from "react";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPagePropsType} from "./ProfileContainer";
import s from "./Profile.module.css";


export const Profile = (props:ProfileContainerPagePropsType) => {
    return (
        <div className={s.container}>
            <ProfileInfo profile = {props.profile }
                         status={props.status}
                         updateUserStatus = {props.updateUserStatus}
            />
            <MyPostsContainer  />
        </div>
    );
}

