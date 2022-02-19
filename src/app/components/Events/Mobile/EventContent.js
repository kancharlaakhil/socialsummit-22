import React from "react";
import EventCard from "./EventCard";
import Dummy from '../images/dummy.png'

import "./css/EventContent.css";

function EventContent(props) {
  const data = [
    {
      id: 1,
      image : Dummy,
      name: "Action Plan",
      rulebook : "/",
      prizeWorth : "10K",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....",
    },
    {
      id: 2,
      image : Dummy,
      name: "Model United Nations",
      rulebook : "/",
      prizeWorth : "10K",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....",
      },
    {
      id: 3,
      image : Dummy,
      name: "Action Plan",
      rulebook : "/",
      prizeWorth : "10K",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....",
      },
    {
      id: 4,
      image : Dummy,
      name: "Action Plan",
      rulebook : "/",
      prizeWorth : "10K",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....",
      },
    {
      id: 5,
      image : Dummy,
      rulebook : "/",
      prizeWorth : "10K",
      name: "Action Plan",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....",  
    },
    {
      id: 6,
      image : Dummy,
      rulebook : "/",
      prizeWorth : "10K",
      name: "Abhivyakti",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....",
    },
    {
      id: 7,
      image : Dummy,
      rulebook : "/",
      prizeWorth : "10K",
      name: "Abhivyakti",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid, sunt ....", 
    },
  ];
  return (
    <div className="mobile-event-content">
      {data.map((element) => {
        console.log(element.id);
        return (
          <div className="mobile-contain-card">
            <EventCard
            key={element.id}
            name={element.name}
            description={element.description}
            id={element.id}
            image ={element.image}
            rulebook={element.rulebook}
            prizeWorth={element.prizeWorth}
          />
          </div>
          
        );
      })}
    </div>
  );
}

export default EventContent;