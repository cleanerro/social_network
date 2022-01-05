import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {DialogsPagePropsType} from './DialogsContainer';
import {Redirect} from "react-router";

export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let message = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newDialogElement = React.createRef<HTMLTextAreaElement>()

    const onAddMessage = () => props.addMessage()


    const onMessageChange = () => {
        if (newDialogElement.current) {
            props.messageChange(newDialogElement.current.value)
        }
    }
    //if (!props.isAuth) return <Redirect to={'/login'}/>

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
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div className={s.button}>
                    <button onClick={onAddMessage}> send</button>
                </div>
            </div>
        </>

    )
}

