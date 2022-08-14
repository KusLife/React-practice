import React, { useEffect, useState } from 'react';
import { usePosts } from './componemts/Hooks/usePosts';
import PostFilter from './componemts/PostFilter';
import PostForm from './componemts/PostForm';
import PostList from './componemts/PostList';
import MyBtn from './componemts/UI/Buttons/MyBtn';
import MyModal from './componemts/UI/Modal/MyModal';
import './styles/App.css';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './componemts/UI/Loader/Loader';
import { useFetching } from './componemts/Hooks/useFetching';
import { getPagesCount } from './utils/getTotalPages';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, isPostLoading, errorPost] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
    
  });
  console.log(totalPages)
  // callback which gets new posts and sets to the local state
  const newPost = (postItem) => {
    setPosts([...posts, postItem]);
    setModal(false);
  };

  // callback which delete posts from the local state
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <MyBtn style={{ marginTop: '25px' }} onClick={() => setModal(true)}>
        Create a post
      </MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addPost={newPost} />
      </MyModal>

      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {errorPost && <h1> Ooooops! {errorPost}</h1>}

      {isPostLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          removePost={removePost}
          posts={searchedAndSortedPosts}
          title={'List of posts'}
        />
      )}
    </div>
  );
}

export default App;
