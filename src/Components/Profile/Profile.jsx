import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />


    </div>
  )
}

export default Profile;