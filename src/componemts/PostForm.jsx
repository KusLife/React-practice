import React, { useState } from 'react';
import MyBtn from '../componemts/UI/Buttons/MyBtn';
import MyInput from '../componemts/UI/Input/MyInput';

function PostForm({ addPost }) {
  let [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault()
    addPost({ ...post, id: Date.now() });
    setPost({ title: '', body: '' })
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Title"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Discription"
      />

      <MyBtn onClick={addNewPost}>POST</MyBtn>
    </form>
  );
}

export default PostForm;
