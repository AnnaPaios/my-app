import React from 'react';
import s from './myPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            <button>Add post</button>
            <div className={s.posts}>
                <div className={s.item}>
                    <Post message='Hi, how are you?'/>
                    <Post message='My first post!'/>
                </div>
            </div>
        </div>
    )
}

export default MyPost;