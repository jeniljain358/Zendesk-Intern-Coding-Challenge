import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const [errorMessage, setErrorMessage] = useState('');

  function handlePosts(item){
    setPosts(item)
  }
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/')
        .then(res => {
        setPosts(res.data.tickets);
        console.log(res)
        setLoading(false);
        })
        .catch(err => {
          console.log('Not good man :(');
          setErrorMessage(" Error!!! Could not fetch data from API");
          setLoading(false)
        })
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Tickets</h1>
      {errorMessage && <div className="error"><h1  style={{color: "red"}}>{errorMessage}</h1></div>}
      <Posts posts={currentPosts} loading={loading} tickid = {handlePosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
