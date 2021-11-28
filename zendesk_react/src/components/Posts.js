import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = ({ posts, loading, tickid}) => {
  const [show, setShow] = useState(false);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  function handleclick(e) {
    const num = Number(e.target.innerText)
    console.log(num)

    const item = posts.filter((i)=>{
      console.log(num)
      return i.id===num
    })
    console.log(item)
    setShow(true)
    tickid(item)
  }

  return (
    <div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Subject</th>
        <th scope="col">Created Date</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {!show?
      <>
      {posts.map(post => (
        <tr key={post.id} >
          <td value = {post.id} onClick = {handleclick} style={{cursor:'pointer'}}>
          {post.id}
          </td>
          <td>
          {post.raw_subject}
          </td>
          <td>
          {post.created_at}
          </td>
          <td>
          {post.status}
          </td>
        </tr>
      ))}</>:
      <div class="card">
      <div class="card-body">
        <h3>{posts[0].id}</h3>
        <h3>{posts[0].raw_subject}</h3>
        <h3>{posts[0].created_at}</h3>
        <h3>{posts[0].status}</h3>
      </div>
    </div>}
    </tbody>
  </table>
  </div>
  );
};

export default Posts;
