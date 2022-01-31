import React from "react";
import {addMessage, DialogsPageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void

}
export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}




export  default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    
)(Dialogs)
