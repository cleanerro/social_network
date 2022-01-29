import React from 'react';
import {addPost, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    changeNewText: (message: string) => void
}
export  type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: StateType):MapStateToPropsType   => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {addPost, })(MyPosts)

