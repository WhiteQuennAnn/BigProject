import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;