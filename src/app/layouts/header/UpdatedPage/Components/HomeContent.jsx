import React from "react";
import "./HomeContent.css";
import background from "../Image/background.png"

export default function Content() {
  return (
    <>
      <div className="home-top-content-wrapper">
      <img src={background} alt="" className="backimg" />
        <div className="header-bottom">
          <h1 className="header-bottom-heading">Educate Empower Sustain</h1>
          <div className="header-bottom-para1">
            <p>National Social Summit 2024</p>
            <p className="header-bottom-line2">10th - 11th Feb 2024</p>
          </div>
          <p className="header-bottom-para3">
            Welcome to the annual Social Summit of NSS IIT Roorkee with the
            theme Education empowers individuals and communities to make
            sustainable choices to the annual Social Summit of NSS IIT Roorkee
            with the theme Education empowers individuals and communities to
            make sustainable choices. Welcome to the annual Social Summit of NSS
            IIT Roorkee with the theme Education empowers individuals and
            communities to make sustainable choices to the annual Social Summit
            of NSS IIT Roorkee with the theme Education empowers individuals and
            communities to make sustainable choices. Welcome to the annual
            Social Summit of NSS IIT Roorkee with the theme Education empowers
            individuals and communities to make sustainable choices to the
            annual Social Summit of NSS IIT Roorkee with the theme Education
            empowers individuals and communities to make sustainable choices.
          </p>

          <div className="header-bottom-button">
            <a href="https://socialsummit.iitr.ac.in/signup"  target="_blank" ><button id="btn-1">Register</button></a>
            
            {/* <button>Payment</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
