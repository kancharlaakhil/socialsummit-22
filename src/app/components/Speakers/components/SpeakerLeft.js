import React from "react";

import "../styles/SpeakerLeft.css";
import Wangchuk from "../assets/Wangchuk.png";

function SpeakerLeft() {
  return (
    <div className="speaker">
      <div className="left">
        <div className="image">
          <img src={Wangchuk} alt="" />
        </div>
        <div className="title">
          <h1>Sonam Wangchuk</h1>
          <p>
            FOUNDING DIRECTOR <br />
            Students’ Educational and Cultural Movement of Ladakh(SECMOL)
          </p>
        </div>
      </div>
      <div className="right">
        <div className="whitespace"></div>
        <div className="para">
          <p>
            Sonam Wangchuk is an Indian engineer, innovator, and education
            reformist. He is the founding director of the Students' Educational
            and Cultural Movement of Ladakh ( SECMOL ), which was founded in
            1988 by a group of students who had been in his own words, the
            ‘victims’ of an alien education system foisted on Ladakh. <br />
            His “Ice Stupa” artificial glacier has claimed fame for helping
            solve the water crisis in the region due to climate change and fast
            melting glaciers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpeakerLeft;
