import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


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
    likesCount: string
}
export const App = () => {


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
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                        <Route path='/users' render={() => <UsersContainer />}/>
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

export default App;
