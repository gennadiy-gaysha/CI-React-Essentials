import React, { Component } from "react";
import axios from "axios";

export class HTTPPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: null,
    };
  }

  postToApi = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello world!",
        body: "It works!",
        userId: 123,
      })
      .then((response) => {
        this.setState({ apiResponse: response.data });
      });
  };

  render() {
    const { apiResponse } = this.state;
    return (
      <div>
        {apiResponse ? (
          <div key={apiResponse.id}>
            <h1>
              {apiResponse.id}. {apiResponse.title}
            </h1>
            <p>By UserID: {apiResponse.userId}</p>
            <p>{apiResponse.body}</p>
          </div>
        ) : (
          <h4>Please, click the button below!</h4>
        )}
        <button onClick={this.postToApi}>Create Post</button>
      </div>
    );
  }
}

export default HTTPPost;
