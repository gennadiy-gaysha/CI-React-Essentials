import React, { Component } from "react";
import postData from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from "./PostItem.js";
import Loader from "./Loader.js";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, posts: [] };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true, posts: postData.savedPosts });
    }, 2000);
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = postData.savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    });
    this.setState({ posts: filteredPosts });
  };

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search</label>
            <input
              onChange={(event) => this.handleChange(event)}
              id="searchInput"
              type="text"
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearcResults}>
          {this.state.isLoaded ? (
            <PostItem posts={this.state.posts} />
          ) : (
            <Loader />
          )}
          {/* {postData.savedPosts.map((post) => {
            return (
              <div className={css.SearchItem} key={post.title}>
                <p>Title: {post.title}</p>
                <p>Artist: {post.name}</p>
                <img src={post.image} alt={post.title} />
                <p>{post.description}</p>
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default Content;
