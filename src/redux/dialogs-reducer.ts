import {DialogsType, MessagesType} from "../App";
import {ActionsTypes} from "./redux-store";

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Andry'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Sergy'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Devid'},

    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'I am front-end developer'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hello'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessagesType = {
                id: 7,
                message: state.newMessageText
            }
            return {
                ...state,
                messages:[newMessage, ...state.messages ],
                newMessageText : ''
            }

        case "UPDATE-NEW-MESSAGE":
            return{...state, newMessageText : action.newText }
        default:
            return state
    }
}

export const addMessage = () => ({type: "ADD-MESSAGE"}) as const
export const messageChange = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE', newText: newText}) as const