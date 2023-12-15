import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

export class NavBarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      buttonText: "log in",
    };
  }

  handleClick = () => {
    this.setState(
      (prevState) => ({
        isLoggedIn: !prevState.isLoggedIn,
        buttonText: prevState.buttonText === "log in" ? "submit" : "log in",
      }),
      console.log(this.state.isLoggedIn)
    );
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <NavBarChild
          isLoggedIn={this.state.isLoggedIn}
          handleClick={this.handleClick}
          buttonText={this.state.buttonText}
        />
      </div>
    );
  }
}

export default NavBarForm;
