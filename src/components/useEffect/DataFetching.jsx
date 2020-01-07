import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1)
  
  const handleClick = () => {
    setIdButton(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idButton]);

  return (
    <div>
      <input
        type='text'
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button onClick={handleClick}>Fetching data</button>
      <h3>{post.title}</h3>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetching;
