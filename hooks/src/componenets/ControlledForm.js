import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "website",
      comments: "",
    };
  }

  // handleNameChange = (event) => {
  //   this.setState({ userName: event.target.value });
  // };

  // handleCategoryName = (event) => {
  //   this.setState({ categoryName: event.target.value });
  // };

  // handleComments = (event) => {
  //   this.setState({ comments: event.target.value });
  // };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Please fill out the form below</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your name:</label>
            <input
              // onChange={this.handleNameChange}
              onChange={this.handleChange}
              name="name"
              id="id-name"
              type="text"
              value={this.state.userName}
            />
          </div>
          <div>
            <label htmlFor="id-category">Select category:</label>
            <select
              // onChange={this.handleCategoryName}
              onChange={this.handleChange}
              id="id-category"
              name="category"
              value={this.state.categoryName}
            >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General inquery</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comment">Comments:</label>
            <textarea
              // onChange={this.handleComments}
              onChange={this.handleChange}
              id="id-comments"
              name="comments"
              value={this.state.comments}
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
