import React, { useMemo, useState } from 'react';
import PostFilter from './componemts/PostFilter';
import PostForm from './componemts/PostForm';
import PostList from './componemts/PostList';
import MyBtn from './componemts/UI/Buttons/MyBtn';
import MyModal from './componemts/UI/Modal/MyModal';
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'The most used' },
    { id: 2, title: 'Phyton', body: 'Esear to understand' },
    { id: 3, title: 'C++', body: 'I have no clue' },
  ]);

  let [filter, setFilter] = useState({ sort: '', query: '' });
  let [modal, setModal] = useState(false);

  // callback which gets new posts and sets to the local state
  const newPost = (postItem) => {
    setPosts([...posts, postItem]);
    setModal(false)
  };

  // to prevent extra rerendering we use a hook 'useMemo'
  // method 'sort' mutate the object so to prevent it we made an array
  // method 'localCompare' is used to compare strings, in our case in the callback
  const sortedPosts = useMemo(() => {
    console.log('Function sorted posts worked');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((posts) =>
      posts.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [sortedPosts, filter.query]);

  // callback which delete posts from the local state
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">

      <MyBtn style={{marginTop: '25px'}} onClick={() => setModal(true)}>Create post</MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addPost={newPost}/>
      </MyModal>

      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        removePost={removePost}
        posts={searchedAndSortedPosts}
        title={'Programming languages posts list'}
      />
    </div>
  );
}

export default App;
