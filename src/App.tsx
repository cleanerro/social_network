import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";

export type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = ({store}) => {
    let state = store.getState()

    return (
        <BrowserRouter>
            <div className='fixed-container'>
                <Header/>
            </div>
            <div className='central-container'>
                <div className='fixed-container'>
                    <div className='column-left'>
                        <Navbar/>
                    </div>
                    <div className='column-center'>
                        <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage}
                                                                      dispatch={store.dispatch.bind(store)}/>}/>
                        <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                      dispatch={store.dispatch.bind(store)}/>}/>
                    </div>
                    <div className='column-right'>
                        text text text
                        text text text
                        text text text
                        text text text
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
