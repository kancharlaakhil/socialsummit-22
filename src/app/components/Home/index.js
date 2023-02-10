import React from "react";
import Hometop from "./Hometop/Main";
import Events from "./Events/Events";
import Footfall from "./Footfalls";
import PastSpeakers from "./PastSpeakers/Speakers";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import Testimonials from "./Testimonials/Testimonials";
import "./css/slider.css";
import "./css/home.css";
import Background from "./Background";
const HomeMain = () => {
  let [width] = useWidthAndHeight();
  // returns the screen/window width.
  // Very useful tacking screen specific tasks within react component.
  // Can be used only within functional components
  return (
    <div className="homeContainer">
      <div className="th-home-top-container">
        <Hometop width={width} />
        <PastSpeakers width={width} />
        <Events width={width} />
        <Footfall width={width} />
        <Background/>
        <Testimonials width={width} />
      </div>
    </div>
  );
};

export default HomeMain;
