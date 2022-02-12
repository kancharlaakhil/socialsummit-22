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
              position:"sticky",
              
            }}
          >
            VISION
          </h5>
          <p class="card-text" style={{ fontFamily: "Roboto", textAlign : "center" }}>
          National Social Summit 2022 envisions an inclusive society for ourselves and our posterity.
Today, the Indian society falls short due to the prevalence of prejudices, bigotry and
disproportionate representation. This year we seek to reform these societal values and bring
about the much needed change.
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
              position:"sticky",
             
            }}
          >
            DYNAMICS
          </h5>
          <p class="card-text " style={{ fontFamily: "Roboto" , textAlign : "center" }}>
          We are a dedicated workforce of over 1000 volunteers striving selflessly for the growth of our
nation. This year, we unite the youth of the nation to be the fire that burns the foundation of
prejudices and disparity in our society.
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
    <p class="card-text col"
      style={{ fontFamily: "Roboto" , textAlign : "center" }}
    >
    The growing unrest in the society gives us a premonition about our grim future in a voice that is
dark and foreboding. With the soaring disparities in the current global scenario we seem ill
prepared to deal with the challenges. Hence, the National Social Summit is here to highlight
these issues at a national platform in order to envision an inclusive society.
    </p>
  </div>
  </div>
      </div>
    </div>
  );
}

export default SecondComp;