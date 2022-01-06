import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  
  return <div className={s.item}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr8xXyXK0ISGD5qgo58uDDy9eMljoBWQf-5E7Dr8fFs8W8_ai5IhSPHWdSnXG9ARfPFI&usqp=CAU' />
   {props.message} 
    <div>
    <span>like</span>
   
    </div>
  </div>

}

export default Post;