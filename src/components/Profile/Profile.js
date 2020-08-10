import React from 'react';
import s from './profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
    return (
      <div className={s.content}>
        <img src='./../images/bg.jpg'/>
        <MyPost/>
      </div> 
    )
}

export default Profile;