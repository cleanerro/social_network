import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {store} from './redux/redux-store';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";


ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );


