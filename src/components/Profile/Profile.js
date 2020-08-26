import React from 'react';
import s from './profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
      <div className={s.content}>
        <ProfileInfo/>
        <MyPost/>
      </div> 
    )
}

export default Profile;