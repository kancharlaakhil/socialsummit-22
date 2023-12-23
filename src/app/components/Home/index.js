import React from "react";
import Hometop from "./Hometop/Main";
import Events from "./HomeEvents/Events";
import Footfall from "./Footfalls";
import PastSpeakers from "./PastSpeakers/Speakers";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import Testimonials from "./Testimonials/Testimonials";
import "./css/slider.css";
import "./css/home.css";
import HeaderTop from '../../layouts/header/UpdatedPage/Components/HeaderTop'
import Background from "./Background";
import HomeContent from "../../layouts/header/UpdatedPage/Components/HomeContent";
const HomeMain = () => {
  let [width] = useWidthAndHeight();
  // returns the screen/window width.
  // Very useful tacking screen specific tasks within react component.
  // Can be used only within functional components
  return (
    <div className="homeContainer">

        {/* <Hometop width={width} /> */}
      <div className="th-home-top-container">


        <HomeContent width={width}/>
        <Footfall width={width} />
          

        <PastSpeakers width={width} />
        <Events width={width} />

        <Background/>
        <Testimonials width={width} />
      </div>
    </div>
  );
};

export default HomeMain;
