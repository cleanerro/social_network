import s from './Post.module.css';
import {PostsDataType} from "../../../../redux/state";




export const Post = (props: PostsDataType ) => {

    return (

        <div className={s.item}>
            <img src='https://i.pinimg.com/280x280_RS/f1/ae/33/f1ae33c62e538d33ff5ca8e7539926e3.jpg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

