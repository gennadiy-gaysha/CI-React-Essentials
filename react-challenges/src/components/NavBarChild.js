import React from "react";

function NavBarChild(props) {
  return !props.isLoggedIn ? (
    <button onClick={props.handleClick}>{props.buttonText}</button>
  ) : (
    <form>
      <label htmlFor="username">
        Username:
        <input type="text" id="username" name="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" id="password" name="password" />
      </label>
      <button onClick={props.handleClick}>{props.buttonText}</button>
    </form>
  );
}

export default NavBarChild;
