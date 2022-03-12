import React from "react";

import "./ImageComponent.css";

function ImageComponent(props) {
  return (
    <div className="partner">
      <div className="imageContainer">
        <img src={props.image} alt="" />
      </div>
      <h1 className="partnerType">{props.title}</h1>
    </div>
  );
}

export default ImageComponent;
