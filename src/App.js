import React, { useState } from 'react';
import { useRef } from 'react';
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

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    //get DOM element with useState
    console.log(title);

    //get DOM element with useRef
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Somthing"
      />
      
      <MyInput ref={bodyInputRef} type="text" placeholder="Somthing second" />

      {/* <input ref={bodyInputRef} type="text" placeholder="Somthing third" /> */}

      <MyBtn onClick={addNewPost}>POST</MyBtn>

      <PostList posts={posts} title={'Java script posts list'} />
    </div>
  );
}

export default App;
