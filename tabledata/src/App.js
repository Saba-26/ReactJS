import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const usePosts = posts.map((post) => {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.username}</td>
            <td>{post.email}</td>
            <td>{post.city}</td>
            <td>{post.phone}</td>
            <td>{post.website}</td>
          </tr>
        </table>
      </div>
    );
  });

  return (
    <>
      <div className="container">{posts && usePosts}</div>
    </>
  );
}

export default App;

