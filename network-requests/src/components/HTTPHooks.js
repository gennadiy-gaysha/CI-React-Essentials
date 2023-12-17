import React, { useState, useEffect } from "react";
import axios from "axios";

function HTTPHooks() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [postMessage, setPostMessage] = useState(null);

  const postToApi = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title: "Hello world!",
        body: "It works!",
        userId: 123,
      })
      .then((response) => {
        setPostMessage(
          response.status === 201
            ? `Success Title: ${response.data.title}`
            : `Failed!`
        );
      });
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        setPosts(
          Array.isArray(response.data) ? response.data : [response.data]
        );
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Posts:</h1>
      <hr />
      {posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id}. {post.title}
            </h2>
            <h4>By user ID: {post.userId}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : error ? (
        <p>{error}</p>
      ) : (
        <h4>Loading posts...</h4>
      )}
      <button onClick={postToApi}>Create Post</button>
      <p>{postMessage}</p>
    </div>
  );
}

export default HTTPHooks;
