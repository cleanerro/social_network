import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {connect} from "react-redux";
import {getUserData} from "./redux/auth-reducer";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Settings} from "./components/settings/Settings";

export class App extends React.Component<ProfileContainerPagePropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <>
                <div className='fixed-container'>
                    <HeaderContainer/>
                </div>
                <div className='central-container'>
                    <div className='fixed-container'>
                        <div className='column-left'>
                            <Navbar/>
                        </div>
                        <div className='column-center'>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>

                        </div>
                        <div className='column-right'>
                            text text text
                            text text text
                            text text text
                            text text text
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
let MapStateToProps = (state: StateType): MapStateToPropsType => ({
        initialized: state.app.initialized
    }
)

export default compose(
    withRouter,
    connect(MapStateToProps, {getUserData, initializeApp}))(App)


export type ProfileContainerPagePropsType = MapStateToPropsType & AppPropsType

type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = {
    getUserData: () => void
    initializeApp: () => void
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
