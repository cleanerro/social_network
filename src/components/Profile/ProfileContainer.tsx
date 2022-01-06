import React from "react";
import {Profile} from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {profilePropsType} from "./Profileinfo/ProfileInfo";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../hoc/withAuthRerdirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

export type MapStateToPropsType = profilePropsType

type MapDispatchToPropsType = {
    getUserProfile: (profile: string) => void

}

export type ProfileContainerPagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPagePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = '2'}
        this.props.getUserProfile(userId)
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
    }
)


export  default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

