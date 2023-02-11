import React from "react";
import EventCardRight from "./EventCardRight";

const EventCard = ({image, name, description, rulebook, prizeWorth, id, link1, link2, eventLink,perk1,perk2,perk3,perk4,perk5}) => {
    function scrollYByVh() {
        // const clientHeight = document.body.clientHeight;
        window.scrollBy(0, 100);
      }
    return (
       
            <EventCardRight onScroll={scrollYByVh}
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