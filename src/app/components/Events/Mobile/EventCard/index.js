import React from "react";


import EventCardLeft from "./Left";
import EventCardRight from "./Right";

const EventCard = ({image, name, description, rulebook, prizeWorth, id, link1, link2, eventLink,perk1,perk2,perk3,perk4,perk5}) => {
    return (
        
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
                perk1={perk1}
                perk2={perk2}
                perk3={perk3}
                perk4={perk4}
                perk5={perk5}

            />
        
    )
}

export default EventCard