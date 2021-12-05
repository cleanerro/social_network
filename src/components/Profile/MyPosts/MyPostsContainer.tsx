import React from 'react';
import {addPost, changeNewText, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    addPost: () => void
    changeNewText: (message: string) => void
}
export  type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: StateType):MapStateToPropsType   => {
    return {
        profilePage: state.profilePage
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewText: (message: string) => {
            dispatch(changeNewTextAC(message))
        }
    }
}*/

export default connect(mapStateToProps, {addPost, changeNewText })(MyPosts)

