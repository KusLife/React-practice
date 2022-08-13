import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 className="noPosts">No posts!</h1>;
  }

  return (
    <div>
      <h1 className="posts__title">{title}</h1>
      {posts.map((post, index) => (
        <div>
          {
            <PostItem
              key={post.id}
              removePost={removePost}
              number={index + 1}
              post={post}
            />
          }
        </div>
      ))}
    </div>
  );
};

export default PostList;
