import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import { useFetching } from './Hooks/useFetching';
import Loader from './UI/Loader/Loader';

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostID, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComm, isLoadingComm, errorComm] = useFetching(async (id) => {
    const response = await PostService.getCommentsPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostID(params.id);
    fetchComm(params.id);
  }, []);

  return (
    <div key={params.id}>
      <h1> HERE WE GONNA HAVE A POST ID = {params.id}</h1>
      {isLoading ? <Loader /> : <div>Title is: {post.title}</div>}

      <h3>Comments</h3>

      {isLoadingComm ? (
        <Loader />
      ) : (
        comments.map((comm) => (
          <div style={{marginTop: 15}}>
            <h4>From: {comm.name}</h4>
            <h5>{comm.email}</h5>
            <div>{comm.body}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostIdPage;
