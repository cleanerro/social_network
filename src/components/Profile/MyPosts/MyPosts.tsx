import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import { ActionsTypes, ProfilePage} from "../../../redux/state";


type ProfileType = {
    profilePage: ProfilePage
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: ProfileType) => {

    let messages = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch({type: "UPDATE-NEW-POST", newText: newPostElement.current.value })
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

