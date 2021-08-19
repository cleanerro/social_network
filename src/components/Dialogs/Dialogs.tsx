import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";


type DialogType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogType> = ({dialogsPage, dispatch}) => {
    let dialogElement = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let message = dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newDialogElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        dispatch(addMessageAC())
    }


    const onMessageChange = () => {
        if (newDialogElement.current) {
            dispatch(onMessageChangeAC(newDialogElement.current.value))
        }
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElement}

                </div>
                <div className={s.messages}>
                    {message}
                </div>
            </div>
            <div className={s.textareaBlock}>
                <div className={s.textarea}>
                    <textarea ref={newDialogElement}
                              onChange={onMessageChange}
                              value={dialogsPage.newMessageText}/>
                </div>
                <div className={s.button}>
                    <button onClick={addMessage}> send</button>
                </div>
            </div>
        </>

    )
}

