import React from "react";

import "./FirstComp.css";
function FirstComp() {
  return (
    <div>
      <div id="bgp" className="container-fluid img-fluid">
        <div className="row align-items-start ">
          <div className="col col-sm-6">
            <h1 style={{ fontFamily: "Raleway" ,fontWeight:"700"}}>OUR STORY</h1>
            <p style={{ fontFamily: "Inter" }}>
              NSS IIT Roorkee is taking a step forward to dedicate the next
              edition of its annual flagship event, the National Social Summit,
              to the healthcare workers, including doctors, nurses, and all
              social service warriors, who are battling against the threat of
              COVID-19 to keep us safe.
            </p>
          </div>
          <div className="col-sm-6 "></div>
        </div>
      </div>
    </div>
  );
}

export default FirstComp;