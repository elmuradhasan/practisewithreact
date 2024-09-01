// src/features/posts/Posts.js

import React from 'react';
import { useGetPostsQuery } from '../../services/api';

const Posts = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
    console.log(posts,"Salamamammamam");
    
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Posts</h1>
 <div className='classPostDiv'>
        {
        posts.map((post) => ( 
        <div className='subPostDivclass'>
    <h2 key={post.id}>{post.title}</h2>
    <p>{post.body}</p>
        </div>
        ))
      }
    </div>
    </>
  );
};

export default Posts;
