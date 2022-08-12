import React, { useState } from 'react';
import PostForm from './componemts/PostForm';
import PostList from './componemts/PostList';
import MySelect from './componemts/UI/Select/MySelect';
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'The most used' },
    { id: 2, title: 'Phyton', body: 'Esear to understand' },
    { id: 3, title: 'C++', body: 'I have no clue' },
  ]);

  let [selectedSort, setSelectedSort] = useState('');
  
  // callback which gets event values and sets to the local state
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // method 'sort' mutate the object so to prevent it we made an array
    // method 'localCompare' is 
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  };

  // callback which gets new posts and sets to the local state
  const newPost = (postItem) => {
    setPosts([...posts, postItem]);
  };

  // callback which delete posts from the local state
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm addPost={newPost} />
      <div>
        <hr style={{ margin: '15px 0px' }} />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By discription' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          removePost={removePost}
          posts={posts}
          title={'Java script posts list'}
        />
      ) : (
        <div>
          <h1 className="noPosts">No posts!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
