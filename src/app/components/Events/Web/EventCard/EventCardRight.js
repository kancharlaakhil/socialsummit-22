import React from "react";
import { Link } from "react-router-dom";

import '../css/EventCard.css'

const EventCardRight = ({image, name, description, rulebook, prizeWorth, id, link1, link2, eventLink}) => {
    return (
        <div className="single-event-container">
            <div className="row h-100">
            <div className="col-9 content-container">
            <div className="row" style={{ height : '5%'}}></div>
            <div className="row h-25 single-event-heading-right d-flex justify-content-end"> {name}</div>
                <div className="row h-25"></div>
                <div className="row h-75"></div>
                <div className="row h-75 single-event-description-right">
                    <div className="row h-75 description-content">
                        {description}
                        <div> <Link to={`/events/${eventLink}`} className="link-text">Click here</Link> to know more about the events. </div>
                        
                    </div>
                    <div className="row h-25 description-prizes">
                        <div className="col-6 rulebook">{
                            rulebook? 
                            <a href={rulebook}  target="_blank" rel="noreferrer">Rulebook</a>:''
                        }</div>
                        {prizeWorth?
                        <div className="col-6 prize-worth d-flex justify-content-end">
                        Prize Worth :  
                        <span className="amount">{prizeWorth}</span>
                    </div>:''}
                    </div>
                </div>
            </div>
            <div className="col-3 image-container"
                style={{
                    backgroundImage : `url(${image})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}
            >

            </div>
            
            </div>
        </div>
    )
}

export default EventCardRight