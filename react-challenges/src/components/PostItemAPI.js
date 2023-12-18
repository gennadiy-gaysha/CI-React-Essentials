import React from "react";
import css from "./css/Content.module.css";

function PostItemAPI(props) {
  return props.posts.map((post) => {
    const { id, type, user, webformatURL, tags } = post;
    return (
      <div className={css.SearchItem} key={id}>
        <p>Artwork type: {type}</p>
        <p>Artist: {user}</p>
        <img src={webformatURL} alt={type} />
        <p>Tags: {tags}</p>
      </div>
    );
  });
}

export default PostItemAPI;
