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
     
    </div>
  );
};

export default HomeMain;
