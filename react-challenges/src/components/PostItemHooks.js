import React from "react";
import css from "./css/Content.module.css";

function PostItem(props) {
  return props.fetchedPosts.map((post) => {
    const { name, title, description, image } = post;
    return (
      <div className={css.SearchItem} key={title}>
        <p>Title: {title}</p>
        <p>Artist: {name}</p>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    );
  });
}

export default PostItem;
