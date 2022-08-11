import React from 'react';

function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <button>Delite</button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;