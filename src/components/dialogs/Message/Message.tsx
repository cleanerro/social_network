import s from './../Dialogs.module.css';

type messagePropsType ={
    message: string
}


const Message: React.FC<messagePropsType> = (props) => {
    return (<div className={s.message}>{props.message}</div>

    )
}

export default Message;