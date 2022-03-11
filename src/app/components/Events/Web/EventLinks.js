import React from "react";
import "./css/EventLinks.css";

function EventLinks() {
  return (
    <>
      <div className="eventMain">
        <div className="left">
          <h4>List Of Events</h4>
          <hr className="line" />
          <a href="#1">Action Plan</a>
          <a href="#2">Model United Nations(MUN)</a>
          <a href="#3">Social conclave</a>
          <a href="#4">Sociothon</a>
          <a href="#5">Policy Case Competition</a>
          <a href="#6">Innovision</a>
          <a href="#7">Case Study</a>
          <a href="#8">Workshop</a>
          <a href="#9">Abhivyakti</a>
          <a href="#10">TurnCoat</a>
          <a href="#11">Treasure Hunt</a>
          <a href="#12">Pre Summit Events</a>
        </div>
      </div>

      {/* <div className="mobileView">
        <DropDown></DropDown>
      </div> */}
    </>
  );
}

export default EventLinks;
