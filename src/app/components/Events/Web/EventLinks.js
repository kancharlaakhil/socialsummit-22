import React from "react";
import "./css/EventLinks.css";


function EventLinks() {
  return (
    <>
      <div className="eventMain">
        <div className="left">
          <h4>List Of Events</h4>
          <hr className="line" />
          <a href="/">Action Plan</a>
          <a href="/">Model United Nations(MUN)</a>
          <a href="/">Social conclave</a>
          <a href="/">Sociothon</a>
          <a href="/">Policy Case Competition</a>
          <a href="/">Innovision</a>
          <a href="/">Case Study</a>
          <a href="/">Workshop</a>
          <a href="/">Abhivyakti</a>
          <a href="/">TurnCoat</a>
          <a href="/">Treasure Hunt</a>
          <a href="/">Pre summit Events</a>
        </div>
      </div>

      {/* <div className="mobileView">
        <DropDown></DropDown>
      </div> */}
    </>
  );
}

export default EventLinks;