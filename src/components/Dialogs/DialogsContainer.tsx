import React from "react";
import {addMessage, DialogsPageType, messageChange} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRerdirect";
import {getUserProfile} from "../../redux/profile-reducer";

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
/*let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        messageChange: (message: string) => {
            dispatch(messageChangeAC(message))
        }
    }
}*/

export const DialogsContainer =  withAuthRedirect(connect(mapStateToProps, {addMessage, messageChange})(Dialogs))


