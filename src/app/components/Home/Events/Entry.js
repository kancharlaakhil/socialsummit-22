import React from "react";

function Entry(props) {
  return (
    <div className="th-home-event-card">

        <img src={props.image} />
        <h1>{props.name}</h1>


    </div>
  );
}

export default Entry;