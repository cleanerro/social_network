import s from './Post.module.css';
import {PostsDataType} from "../../../../App";
import {useState} from "react";





export const Post = (props: PostsDataType ) => {

    let [likesCount, setLikesCount] = useState(props.likesCount)
    let onAddLikeCountHandler = () => {
        setLikesCount(likesCount + 1)
    }
    return (
        <div className={s.post}>
            <div className={s.header}>
                <div className={s.avatar}>
                    <img src='https://i.pinimg.com/280x280_RS/f1/ae/33/f1ae33c62e538d33ff5ca8e7539926e3.jpg' />
                </div>
                <div className={s.name}>
                    name
                </div>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
            <div className={s.footer}>
                <div className={s.likes} onClick={onAddLikeCountHandler}>like {likesCount}</div>
                <div className={s.comments}>{'comments'}</div>
            </div>
        </div>
    );
}

