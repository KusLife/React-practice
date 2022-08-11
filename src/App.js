import React, { useState } from 'react';
// import ClassCounter from './componemts/ClassCounter';
// import Counter from './componemts/Counter';
// import PostItem from './componemts/PostItem';
import PostList from './componemts/PostList';
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'JavaScript', body: 'Discription' },
    { id: 3, title: 'JavaScript', body: 'Discription' },
  ]);
  let [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Discription' },
    { id: 2, title: 'Python', body: 'Discription' },
    { id: 3, title: 'Python', body: 'Discription' },
  ]);

  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter/> */}

      {/* <PostItem post={post}/> */}

      <PostList posts={posts} title={'Java script posts list'}/>
      <PostList posts={posts2} title={'Python posts list'}/>
    </div>
  );
}

export default App;
