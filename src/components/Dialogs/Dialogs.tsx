import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {ActionsType, MessagePage,} from "../../redux/state";


type DialogType = {
    messagePage: MessagePage
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogType> = ({messagePage, dispatch }) => {


    let dialogElement = messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let message = messagePage.messages.map(m => <Message message={m.message}/>)

    let newDialogElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        dispatch({type: "ADD-MESSAGE" })
    }


    const onMessageChange = () => {
        if (newDialogElement.current) {
            dispatch({type: "UPDATE-NEW-MESSAGE", newText : newDialogElement.current.value })
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
                              value={messagePage.newMessageText}/>
                </div>
                <div className={s.button}>
                    <button onClick={addMessage}> send</button>
                </div>
            </div>
        </>

    )
}

