import React from 'react';
import s from './post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
            {props.message}
            <br/>
            <span>{props.likes}</span>
        </div>
    )
}

export default Post;