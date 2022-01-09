import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";

const HomeMain = () => {
  const [width] = useWidthAndHeight();
  // returns the screen/window width.
  // Very useful tacking screen specific tasks within react component.
  // Can be used only within functional components
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HomeMain;
