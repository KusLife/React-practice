import React from 'react';
import MyBtn from './UI/Buttons/MyBtn';

function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyBtn onClick={() => props.removePost(props.post)}>Delete</MyBtn>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
