import React from 'react';
import { useNavigate } from 'react-router-dom'
import MyBtn from './UI/Buttons/MyBtn';

function PostItem(props) {
  const navigate = useNavigate()
 
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyBtn onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyBtn>
          <MyBtn onClick={() => props.removePost(props.post)}>Delete</MyBtn>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
