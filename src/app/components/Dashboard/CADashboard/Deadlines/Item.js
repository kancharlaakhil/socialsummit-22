import React from "react";
import "./css/Item.css";

function Item(props) {
  return (
    <div className="itemCard">
      <div className="dateBlock">
        <h1>{props.date}</h1> {/* Date */}
        <h2>{props.month}</h2> {/* Month */}
      </div>
      <div className="tasks">
        <h1>Task {props.taskNumber}</h1>
        <p>Insta post sharing Sociothon</p>
      </div>
    </div>
  );
}

export default Item;