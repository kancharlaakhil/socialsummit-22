import React from "react";
import Items from "./Item";
import "./css/DeadlinesList.css";
import arrow from "./images/Arrow.svg";

function Tasks() {
  const data = [
    { id: 1, date: 10, month: "Feb" },
    { id: 2, date: 11, month: "Feb" },
    { id: 3, date: 12, month: "Feb" },
    { id: 4, date: 13, month: "Feb" },
    { id: 5, date: 14, month: "Feb" },
    { id: 6, date: 15, month: "Feb" },
    { id: 7, date: 16, month: "Feb" },
    { id: 8, date: 17, month: "Feb" },
    { id: 9, date: 18, month: "Feb" },
    { id: 10, date: 19, month: "Feb" },
    { id: 11, date: 20, month: "Feb" },
    { id: 12, date: 21, month: "Feb" },
    { id: 13, date: 22, month: "Feb" },
    { id: 14, date: 23, month: "Feb" },
    { id: 15, date: 24, month: "Feb" },
    { id: 16, date: 25, month: "Feb" },
    { id: 17, date: 26, month: "Feb" },
    { id: 18, date: 27, month: "Feb" },
  ];

  return (
    <div className="task_main">
     
      <div className="load" style={{height:"5%"}}>
        <img src={arrow} alt="" />
        <h3 className="loadMore">Load more</h3>
      </div>
      <div className="items">
      {data.map((element, index) => {
          console.log(element.id);
          return (
            <Items
              index={index}
              key={element.id}
              date={element.date}
              month={element.month}
              id={element.id}
              taskNumber={element.id}
            />
          );
        })}
        
      </div>
    </div>
  );
}

export default Tasks;