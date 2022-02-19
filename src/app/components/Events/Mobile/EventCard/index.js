import React from "react";


import EventCardLeft from "./Left";
import EventCardRight from "./Right";

const EventCard = ({image, name, description, rulebook, prizeWorth, id}) => {
    return (
        
            (id % 2 )?
            <EventCardLeft
                name={name}
                description={description}
                id={id}
                image ={image}
                rulebook={rulebook}
                prizeWorth={prizeWorth}
            />
            :
            <EventCardRight
                name={name}
                description={description}
                id={id}
                image ={image}
                rulebook={rulebook}
                prizeWorth={prizeWorth}
            />
        
    )
}

export default EventCard