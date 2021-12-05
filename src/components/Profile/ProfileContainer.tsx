import React from "react";
import {Profile} from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {profilePropsType} from "./Profileinfo/ProfileInfo";
import {RouteComponentProps, withRouter} from "react-router";
import {profileApi} from "../../api/api";

type PathParamType = {
    userId: string
}

export type MapStateToPropsType = profilePropsType

type MapDispatchToPropsType = {
    setUserProfile: (profile: string) => void
}

export type ProfileContainerPagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPagePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = '2'}
        profileApi.getProfile(userId)
            .then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {

        return (

            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => (
    { profile: state.profilePage.profile }
)

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
 
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)



