import React, { Component } from "react";
import axios from "axios";

export class HTTPRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((responce) => {
      this.setState({ posts: responce.data });
      console.log(responce.data);
    });
  }

  render() {
    return JSON.stringify(this.state.posts);
  }

  // render() {
  //   const posts = this.state.posts.map((post) => (
  //     <div key={post.id}>
  //       <h2>
  //         {post.id}. {post.title}
  //       </h2>
  //       <p>{post.body}</p>
  //       <hr></hr>
  //     </div>
  //   ));
  //   return <div>{posts}</div>;
  // }
}

export default HTTPRequests;
