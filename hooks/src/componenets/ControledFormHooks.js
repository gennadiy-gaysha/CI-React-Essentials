import React, { useState } from "react";

function ControledFormHooks() {
  // count: a new state property
  // setCount: a method (setter function) to update count
  // useState(0) hook: initialize count to 0
  const [name, setName] = useState("");
  const [category, setCategory] = useState("website");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, category, comments);
  };

  return (
    <div>
      <h2>Please fill out the form below</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id-name">Your name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            // onChange={this.handleChange}
            name="name"
            id="id-name"
            type="text"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="id-category">Select category:</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            // onChange={this.handleChange}
            id="id-category"
            name="category"
            value={category}
          >
            <option value="website">Website issue</option>
            <option value="order">Order issue</option>
            <option value="general">General inquery</option>
          </select>
        </div>
        <div>
          <label htmlFor="id-comment">Comments:</label>
          <textarea
            onChange={(e) => setComments(e.target.value)}
            // onChange={this.handleChange}
            id="id-comments"
            name="comments"
            value={comments}
          ></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControledFormHooks;
