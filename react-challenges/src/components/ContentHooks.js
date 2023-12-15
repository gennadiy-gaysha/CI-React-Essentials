import React, { useState, useEffect } from "react";
import postData from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from "./PostItemHooks.js";
import Loader from "./Loader.js";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(postData.savedPosts);
    }, 2000);
  }, []);

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = postData.savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    });
    setFetchedPosts(filteredPosts);
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
          <h4>posts found: {fetchedPosts.length}</h4>
        </form>
      </div>
      <div className={css.SearcResults}>
        {isLoaded ? <PostItem fetchedPosts={fetchedPosts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
