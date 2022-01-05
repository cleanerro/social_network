import React from "react";
import {Profile} from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {profilePropsType} from "./Profileinfo/ProfileInfo";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
type PathParamType = {
    userId: string
}

export type MapStateToPropsType = profilePropsType & {
    isAuth: boolean
}

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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (

            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => (
    {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth

    }
)

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)



