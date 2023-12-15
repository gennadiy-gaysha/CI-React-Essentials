import React, { Component } from "react";

export class ClassCounterExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("mounted");
    document.title = this.state.count;
  }

  componentDidUpdate() {
    console.log("updated");
    document.title = this.state.count;
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increment count {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterExample;
