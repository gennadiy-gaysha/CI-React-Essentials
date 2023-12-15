import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello",
      buttonText: "Exit",
      count: 0,
    };
  }

  incrementCount() {
    this.setState((prevState, prevProps) => {
      console.log(prevProps);
      console.log(prevState);
      return { count: prevState.count + 1 };
    });
  }

  handleClick() {
    this.setState(
      {
        introduction: this.state.introduction === "Hello" ? "Goodbuy" : "Hello",
        buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
      },
      () => console.log(this.state.introduction)
    );
  }

  render() {
    return (
      <>
        <h1>
          {this.state.introduction}, {this.props.name} {this.props.greeting}
        </h1>
        <p>Number of increments: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
        <button onClick={() => this.incrementCount()}>Increment+1</button>
      </>
    );
  }
}

export default StatefulGreetingWithPrevState;
