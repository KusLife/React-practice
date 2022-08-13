import React, { useMemo, useState } from 'react';
import PostForm from './componemts/PostForm';
import PostList from './componemts/PostList';
import MyInput from './componemts/UI/Input/MyInput';
import MySelect from './componemts/UI/Select/MySelect';
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'The most used' },
    { id: 2, title: 'Phyton', body: 'Esear to understand' },
    { id: 3, title: 'C++', body: 'I have no clue' },
  ]);

  let [selectedSort, setSelectedSort] = useState('');
  let [searchQuery, setSearchQuery] = useState('');

  // callback which gets event values and sets to the local state
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  // callback which gets new posts and sets to the local state
  const newPost = (postItem) => {
    setPosts([...posts, postItem]);
  };

  // to prevent extra rerendering we use hook 'useMemo'
  // method 'sort' mutate the object so to prevent it we made an array
  // method 'localCompare' is used to compare strings, in our case in the callback
  const sortedPosts = useMemo(() => {
    console.log('Function sorted posts worked');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [posts, selectedSort]);

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((posts) => posts.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [sortedPosts, searchQuery])

  // callback which delete posts from the local state
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm addPost={newPost} />
      <hr style={{ margin: '15px 0px' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
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
      {searchedAndSortedPosts.length ? (
        <PostList
          removePost={removePost}
          posts={searchedAndSortedPosts}
          title={'Programming languages posts list'}
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
