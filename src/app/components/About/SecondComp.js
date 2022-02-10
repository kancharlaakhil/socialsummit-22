import React from "react";
import img1 from "./assets/p1.png";
import img2 from "./assets/p2.png";
import img3 from "./assets/p3.png";
import "./SecondComp.css";

import "./FirstComp.css";

function SecondComp() {
  return (
    <div className="container mt-5">
    <div className="row">
      <div id="card1" class=" containCard1 col-md-4 col-12">
        <img src={img1} class="cardimg" alt="..." />
        <div class="card-body">
          <div className="number">01</div>
          <h5
            class="card-title pb-2"
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "2rem",
              color: " #444444",
              position:"sticky"
            }}
          >
            VISION
          </h5>
          <p class="card-text" style={{ fontFamily: "Roboto" }}>
            NSS IIT Roorkee is taking a step forward to dedicate the next
            edition of its annual flagship event, the National Social Summit, to
            the healthcare workers, including doctors, nurses, and all social
            service warriors, who are battling against the threat of COVID-19 to
            keep us safe.
          </p>
        </div>
      </div>

      <div
        id="card2"
        class="containCard1 col-md-4 col-12 pt-5 pb-5 mt-0 mt-md-5"
        // style={{ width: "22rem", backgroundColor: "#fafafa" }}
      >
        <img src={img2} class="cardimg" alt="..." />
        <div class="card-body">
          <div className="number">02</div>
          <h5
            class="card-title pb-2 "
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "2rem",
              color: " #444444",
              position:"sticky"
            }}
          >
            DYNAMICS
          </h5>
          <p class="card-text " style={{ fontFamily: "Roboto" }}>
            NSS IIT Roorkee is taking a step forward to dedicate the next
            edition of its annual flagship event, the National Social Summit, to
            the healthcare workers, including doctors, nurses, and all social
            service warriors, who are battling against the threat of COVID-19 to
            keep us safe.
          </p>
        </div>
        </div>

<div
  id="card3"
  class="containCard1 col-md-4 col-12 "

>
  <img src={img3} class="cardimg" alt="..." />
  <div class="card-body">
    <div className="number">03</div>
    <h5
      class="card-title pb-2"
      style={{
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "2rem",
        color: " #444444",
        position:"sticky"
      }}
    >
      MISSION
    </h5>
    <p class="card-text col">
      NSS IIT Roorkee is taking a step forward to dedicate the next
      edition of its annual flagship event, the National Social Summit, to
      the healthcare workers, including doctors, nurses, and all social
      service warriors, who are battling against the threat of COVID-19 to
      keep us safe.
    </p>
  </div>
  </div>
      </div>
    </div>
  );
}

export default SecondComp;