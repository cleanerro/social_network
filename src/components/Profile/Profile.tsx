import React from "react";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPagePropsType} from "./ProfileContainer";


export const Profile = (props:ProfileContainerPagePropsType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile }
                         status={props.status}
                         updateUserStatus = {props.updateUserStatus}
            />
            <MyPostsContainer  />
        </div>
    );
}

