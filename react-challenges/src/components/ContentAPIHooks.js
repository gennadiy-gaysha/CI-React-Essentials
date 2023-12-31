import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI.js";
import Loader from "./Loader.js";
import axios from "axios";
import API_KEY from "../secrets.js";

function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100&editors_choice=true&safesearch=false&orientation=horizontal`
    );
    console.log(response);
    const fetchedPosts = response.data.hits;
    setIsLoaded(true);
    setPosts(fetchedPosts);
    setSavedPosts(fetchedPosts);
  };

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name);
    });
    setPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchInput">Search</label>
          <input
            onChange={(event) => {
              handleChange(event);
            }}
            id="searchInput"
            type="text"
          />
          <h4>posts found: {posts.length}</h4>
        </form>
      </div>
      <div className={css.SearcResults}>
        {isLoaded ? <PostItemAPI posts={posts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentAPIHooks;
