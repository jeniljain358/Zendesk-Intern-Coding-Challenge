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
        <th scope="col">Created Time</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {!show?
      <>
      {posts && posts.map(post => (
        <tr key={post.id} >
          <td value = {post.id} onClick = {handleclick} style={{cursor:'pointer'}}>
          {post.id}
          </td>
          <td>
          {post.raw_subject}
          </td>
          <td>
          {post.created_at.slice(0, 10)}
          </td>
          <td>
          {post.created_at.slice(11,19)}
          </td>
          <td>
          {post.status}
          </td>
        </tr>
      ))}</>:
      <div class="card">
      <div class="card-body">
        <h3>Description:</h3><p>{posts[0].description}</p>
        <h4>Requester Id:</h4><span>{posts[0].requester_id}</span>
      </div>
    </div>}
    </tbody>
  </table>
  </div>
  );
};

export default Posts;
