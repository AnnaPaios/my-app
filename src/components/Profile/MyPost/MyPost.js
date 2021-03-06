import React from 'react';
import s from './myPost.module.css';
import Post from './Post/Post';

let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'My first post!', likesCount: 3 }
]

const MyPost = () => {
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div><button>Add post</button></div>
            <div><textarea></textarea></div>
            <div className={s.posts}>
                <div className={s.item}>
                    <Post message='Hi, how are you?' likes='13'/>
                    <Post message='My first post!' likes='18'/>
                </div>
            </div>
        </div>
    )
}

export default MyPost;