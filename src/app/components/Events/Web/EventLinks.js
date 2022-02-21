import React from "react";
import "./css/EventLinks.css";


function EventLinks() {
  return (
    <>
      <div className="eventMain">
        <div className="left">
          <h4>List Of Events</h4>
          <hr className="line" />
          <a href="/events">Action Plan</a>
          <a href="/events">Model United Nations(MUN)</a>
          <a href="/events">Social conclave</a>
          <a href="/events">Sociothon</a>
          <a href="/events">Policy Case Competition</a>
          <a href="/events">Innovision</a>
          <a href="/events">Case Study</a>
          <a href="/events">Workshop</a>
          <a href="/events">Abhivyakti</a>
          <a href="/events">TurnCoat</a>
          <a href="/events">Treasure Hunt</a>
          <a href="/events">Pre Summit Events</a>
          
        </div>
      </div>

      {/* <div className="mobileView">
        <DropDown></DropDown>
      </div> */}
    </>
  );
}

export default EventLinks;