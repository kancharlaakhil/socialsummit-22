import React from "react";
import { Link } from "react-router-dom";

import "./ImageComponent.css";

function ImageComponent(props) {
  const width = props.width ? props.width : "16rem";
  const height = props.height ? props.height : "12rem";

  return (
    <div className="partner" style={{ padding: "0.6rem" }}>
      <div className="imageContainer" href={props.link}>
        <div
          style={{
            width: `${width}`,
            height: `${height}`,
            backgroundImage: `url(${props.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <h1 className="partnerType">{props.title}</h1>
    </div>
  );
}

export default ImageComponent;
