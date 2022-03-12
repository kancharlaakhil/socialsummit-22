import React from "react";

import SpeakerLeft from "./components/SpeakerLeft";
import SpeakerRight from "./components/SpeakerRight";
import "./styles/Speakers.css";

function Speakers() {
  return (
    <div className="speakersPage">
      <SpeakerLeft></SpeakerLeft>
      <SpeakerRight></SpeakerRight>
    </div>
  );
}

export default Speakers;
