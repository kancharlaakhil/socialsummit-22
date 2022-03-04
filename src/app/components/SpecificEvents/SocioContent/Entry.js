import React from "react";

function Entry(props) {
  return (
    <div className="th-Sociothon-content">
      <div className="th-Sociothon-content1">{props.title}</div>
      <div className="event_line"></div>
      <div className="th-Sociothon-content2">
        <p>{props.content}</p>
      </div>
      <div className="th-event-sociothon-top1-links">
        <a href="#">Register &gt; </a>
        <a href="#">Resources &gt;</a>
      </div>
    </div>
  );
}

export default Entry;
