import React, { useState } from 'react';
import PostList from './componemts/PostList';
import MyBtn from './componemts/UI/Buttons/MyBtn';
import MyInput from './componemts/UI/Input/MyInput';
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'JavaScript', body: 'Discription' },
    { id: 3, title: 'JavaScript', body: 'Discription' },
  ]);

  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  const addNewPost = () => {
    const newPost = {
      title,
      body,
    };

    setPosts([...posts, newPost])
    setTitle('')
    setBody('')

  };

  return (
    <div className="App">
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />

      <MyInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder="Somthing second"
      />

      <MyBtn onClick={addNewPost}>POST</MyBtn>

      <PostList posts={posts} title={'Java script posts list'} />
    </div>
  );
}

export default App;
