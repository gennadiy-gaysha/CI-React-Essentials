import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI.js";
import Loader from "./Loader.js";
import axios from "axios";
import API_KEY from "../secrets.js";

export class ContentAPI extends Component {
  constructor(props) {
    super(props);
    // savedPosts will be used to store the full API GET request data so that we can return to the original array after filtering our results.
    // In order to filter our posts, we can simply download all the posts at once, save it locally, and filter. This will be much faster than making multiple API requests.
    this.state = { isLoaded: false, posts: [], savedPosts: [] };
  }

  componentDidMount() {
    this.fetchImages();
  }

  async fetchImages() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100&editors_choice=true&safesearch=false&orientation=horizontal`
    );
    console.log(response);
    const fetchedPosts = response.data.hits;
    this.setState({
      isLoaded: true,
      posts: fetchedPosts,
      savedPosts: fetchedPosts,
    });
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = this.state.savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name);
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
            <PostItemAPI posts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default ContentAPI;
