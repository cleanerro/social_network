import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type dialogItemPropsType ={
    name: string
    id:number
}

const DialogItem: React.FC<dialogItemPropsType> = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://i.pinimg.com/280x280_RS/f1/ae/33/f1ae33c62e538d33ff5ca8e7539926e3.jpg' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;