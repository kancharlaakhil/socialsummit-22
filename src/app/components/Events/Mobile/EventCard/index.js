import React from "react";


import EventCardLeft from "./Left";
import EventCardRight from "./Right";

const EventCard = ({image, name, description, rulebook, prizeWorth, id, link1, link2, eventLink}) => {
    return (
        
            (id % 2 )?
            <EventCardLeft
                name={name}
                description={description}
                id={id}
                image ={image}
                rulebook={rulebook}
                prizeWorth={prizeWorth}
                link1={link1}
                link2={link2}
                eventLink={eventLink}
            />
            :
            <EventCardRight
                name={name}
                description={description}
                id={id}
                image ={image}
                rulebook={rulebook}
                prizeWorth={prizeWorth}
                link1={link1}
                link2={link2}
                eventLink={eventLink}
            />
        
    )
}

export default EventCard