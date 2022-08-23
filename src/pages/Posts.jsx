import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../Hooks/useFetching';
import { usePosts } from '../Hooks/usePosts';
import PostFilter from '../componemts/PostFilter';
import PostForm from '../componemts/PostForm';
import PostList from '../componemts/PostList';
import MyBtn from '../componemts/UI/Buttons/MyBtn';
import Loader from '../componemts/UI/Loader/Loader';
import MyModal from '../componemts/UI/Modal/MyModal';
import Paginatopr from '../componemts/UI/Paginatopr/Paginator';
import { getPagesCount } from '../utils/getPagesCount';
import { useObserver } from '../Hooks/useObserver';
import MySelect from '../componemts/UI/Select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const [fetchPosts, isPostLoading, errorPost] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  // callback which gets new posts and sets to the local state
  const newPost = (postItem) => {
    setPosts([...posts, postItem]);
    setModal(false);
  };

  // callback which delete posts from the local state
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (p) => {
    setPage(p);
  };

  // We could use this code, but instead created a costom hook
  // useEffect(() => {
  //   if (isPostLoading) return;
  //   if (observer.current) observer.current.disconnect();
  //   function callBack(entries, obsesrver) {
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       console.log(page);
  //       setPage(page + 1);
  //     }
  //   }
  //   observer.current = new IntersectionObserver(callBack);
  //   observer.current.observe(lastElement.current);
  // }, [isPostLoading]);

  useObserver(lastElement, isPostLoading, page < totalPages, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);

  return (
    <div>
      <MyBtn onClick={() => setModal(true)}>Create a post</MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addPost={newPost} />
      </MyModal>

      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        defaultValue={'Number of posts'}
        onChange={(value) => setLimit(value)}
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'All posts' },
        ]}
      />

      {errorPost && <h1> Ooooops! {errorPost}</h1>}

      <Paginatopr totalPages={totalPages} page={page} changePage={changePage} />

      {isPostLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <Loader />
        </div>
      )}

      <PostList
        removePost={removePost}
        posts={searchedAndSortedPosts}
        title={'List of posts'}
      />
      <div ref={lastElement} style={{ height: 20, background: 'blue' }} />
    </div>
  );
}

export default Posts;
