import React from 'react';
import s from './profileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src='./../../../images/bg.jpg'/>
        </div> 
        <div className={s.descriptionBlock}>ava + desc</div>
      </div>
      
    )
}

export default ProfileInfo;