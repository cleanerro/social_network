import React from "react";
import {addMessage, DialogsPageType, messageChange} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRerdirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    messageChange: (message: string) => void
}
export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}




export  default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage, messageChange}),
    withAuthRedirect
)(Dialogs)
