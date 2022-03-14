import React from "react";

import "../styles/Speaker.css";

function Speaker(props) {
  return (
    <div className="speaker">
      <div className="left" style={{ order: props.id % 2 === 1 ? 0 : 1 }}>
        <img src={props.image} alt="" />

        <div
          className="title"
          style={{ right: props.id % 2 === 1 ? "-119%" : "85%" }}
        >
          <h1 style={{ textAlign: props.id % 2 === 1 ? "left" : "right" }}>
            {props.name}
          </h1>
          <p style={{ textAlign: props.id % 2 === 1 ? "left" : "right" }}>
            {props.post}
          </p>
        </div>
      </div>
      <div className="right">
        <div className="whitespace"></div>
        <div className="para">
          <p>{props.descp}</p>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
