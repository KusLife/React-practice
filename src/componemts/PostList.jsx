import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 className="posts__title">{title}</h1>
      {posts.map((post, index) => (
        <div>{<PostItem number={index+1} key={post.id} post={post} />}</div>
      ))}
    </div>
  );
};

export default PostList;
