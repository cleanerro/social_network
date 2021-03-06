import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {DialogsPagePropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let message = props.dialogsPage.messages.map(m => <Message message={m.message}/>)


    const addNewMessage = (value: newMessageType) => {
        props.addMessage(value.newMessageText)
    }



   // if (!props.isAuth) return <Redirect to={'/login'}/>

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
            <AddMessageReduxForm onSubmit={ addNewMessage} />
            </div>
        </>

    )
}
const maxLength = maxLengthCreator(10);
const AddMessageForm: React.FC<InjectedFormProps<newMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = {Textarea}
                       name = 'newMessageText'
                       placeholder = 'Enter new message' validate = {[required, maxLength ]} />
            </div>
            <div className={s.button}>
                <button > send</button>
            </div>
        </form>
   )
}

const AddMessageReduxForm = reduxForm<newMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)

type newMessageType = {
    newMessageText: string

}