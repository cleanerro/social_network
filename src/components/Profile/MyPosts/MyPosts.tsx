import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const MyPosts = (props: MyPostsPropsType) => {

    let messages = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addNewPost = (value: newPostType) => {
        props.addPost(value.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMessageReduxForm onSubmit={ addNewPost}/>

            <div className={s.posts}>
                {messages}
            </div>
        </div>

    );
}

const AddNewPostForm: React.FC<InjectedFormProps<newPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = 'textarea' name = 'newPostText' placeholder = 'Enter new text' />
            </div>
            <div className={s.button}>
                <button > send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<newPostType>({form: 'profileAddPostForm'})(AddNewPostForm)


type newPostType = {
    newPostText: string

}