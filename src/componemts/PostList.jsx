import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 className="noPosts">No posts!</h1>;
  }

  return (
    <div>
      <h1 className="posts__title">{title}</h1>

      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <div>
              {
                <PostItem
                  removePost={removePost}
                  number={index + 1}
                  post={post}
                />
              }
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
