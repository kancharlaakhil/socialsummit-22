import React from "react";

import "./Committe.css";

function Committe(props) {
  return (
    <div className="committe_card">
      <div className="committeImage">
        <img src={props.image} alt="" />
      </div>
      <div className="para">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Committe;
