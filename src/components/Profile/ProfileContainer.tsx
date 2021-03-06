import React from "react";
import {Profile} from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {profileInfoPropsType} from "./Profileinfo/ProfileInfo";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";

type PathParamType = {
    userId: string
}



type MapStateToPropsType = {
    profile: profileInfoPropsType | null
    status: string
    authorisedUserID: number | null
    isAuth: boolean

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void

}

export type ProfileContainerPagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPagePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        //@ts-ignore
        if(!userId) {userId = this.props.authorisedUserID}
        if(!userId) {
                this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (

            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserID: state.auth.userId,
        isAuth: state.auth.isAuth
    }
)


export  default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter

)(ProfileContainer)

