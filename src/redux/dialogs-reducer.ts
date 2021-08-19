import {ActionsTypes, DialogsPageType, MessagesType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessagesType = {
                id: 7,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageAC = () => ({type: "ADD-MESSAGE"}) as const
export const onMessageChangeAC = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE', newText: newText}) as const