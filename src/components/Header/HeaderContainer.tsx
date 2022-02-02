import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthType,  logoutTC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


type MapDispatchToPropsType = {
    logoutTC: () => void

}
export type HeaderContainerPagePropsType = AuthType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerPagePropsType> {

    render() {
        return <Header {...this.props} />

    }
}

let mapStateToProps = (state: StateType): AuthType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }

}

export default connect(mapStateToProps, {logoutTC})(HeaderContainer)