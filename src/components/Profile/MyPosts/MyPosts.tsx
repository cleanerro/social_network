import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, ProfilePageType} from "../../../redux/state";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts = (props: ProfileType) => {

    let messages = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(changeNewTextAC(newPostElement.current.value))
            // props.dispatch({type: "UPDATE-NEW-POST", newText: newPostElement.current.value })
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.profilePage.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {messages}
            </div>
        </div>

    );
}

